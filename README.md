my-artifactId
=========

Description
----------------------------------------------------
my-description


Build the static frontend
-------------------------

generate the html
```bash
	npm start
```
show the html
```bash
	http-server dist .
```

view in http://localhost:8080


Build the dynamic backend
-------------------------


```bash
	mvn install; heroku local
```

view http://localhost:5000/systeminfo

WIP
-------------------------

github account
git add --all; git commit -m"."; git push -u origin master
https://github.com/rherrajan/twoTier

netlify account
https://two-tier.netlify.com/
npm start

heroku account
https://two-tier.herokuapp.com/
mvn install; heroku local
heroku logs --tail --app two-tier

grunt
nvm install 5.0
nvm use 5.0
npm install -g grunt-cli
npm install grunt-metalsmith --save-dev
npm install grunt-contrib-watch --save-dev

grunt watch

http-server dist

