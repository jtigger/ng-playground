Sandbox for experimenting with features, organizing concepts, and various techniques with Angular JS.

# Technology Stack

* NPM for dependency management (the defacto standard for package management)
* Grunt for build tool (it uses a imperative style, mirroring the problem space)
  * `grunt-contrib-copy` to move static files from `src/` to `dist/`
  * Browserify for module inclusion (do it how node does)
    * [https://github.com/substack/browserify-handbook]
* Karma to run tests
 * Jasmine -- BDD-style specs
 * Jasmine JQuery -- for DOM work in Jasmine specs
 * (do NOT browserify in karma; doing so makes it hard to use in WebStorm/IntelliJ)
   https://jtigg3r.wordpress.com/2015/11/12/running-karma-in-jetbrains-idea-products-intellij-and-webstorm


# Setup

```
npm install
sudo npm install -g grunt-cli
```


# TODO

* Remove globally installed Grunt-cli, in favor of a local install with a PATH that includes `./node_modules/.bin/`
