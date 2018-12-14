const Handlebars = require('handlebars');

Handlebars.registerHelper('is', function (value, test, options) {
    if (value === test) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});

Handlebars.registerHelper('date', function (date) {
    return moment(date, "MM-DD-YYYY").format('Do MMM \'YY');
});

module.exports = function(grunt) {
	grunt
			.initConfig({
				metalsmith : {
					main : {
						src : 'src/main/metalsmith/markdown',
						dest : 'dist',
						options : {
							metadata : {
								title : 'my-artifactId',
								description : 'my-description'
							},
							plugins : {
								'metalsmith-collections' : {
							        pages: {
							            pattern: '*.md',
							            sortBy: 'menu-order'
							        }
								},
								'metalsmith-markdown' : {},
								'metalsmith-permalinks' : {},
								'metalsmith-layouts' : {
									engine : 'handlebars',
									default : 'default.hbs',
									directory : 'src/main/metalsmith/layouts',
									partials : 'src/main/metalsmith/layouts/partials'
								},		
								'metalsmith-templates' : {
									engine : 'handlebars'
								}
							}
						}
					}
				},
				copy: {
					main: {
					    files: [
					      // includes files within path and its sub-directories
					      {expand: true, cwd: 'src/main/metalsmith/', src: ['assets/**'], dest: 'dist/'},
					      {expand: true, cwd: 'src/main/metalsmith/public/', src: ['*'], dest: 'dist/'},	
					    ],
					},
				},
				watch : {
					scripts : {
						files : [ 'src/**/*.hbs', 'src/**/*.css', 'src/**/*.js' ],
						tasks : [
							'metalsmith',
							'copy'
							],
						options : {
							spawn : false,
						},
					},
				},
			});

	grunt.loadNpmTasks('grunt-metalsmith');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	
	grunt.registerTask('default', [ 'metalsmith' ]);
}
