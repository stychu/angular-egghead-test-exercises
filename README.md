##Exercise 57: Getting Started With Protractor
Protractor is an end-to-end testing library for AngularJS. After installing the necessary components (see at **Test Configuration**)
try to write a simple test to display correct page title 

###Requirements
* instead of ``` protractor.getInstance()``` use simple ```browser``` (example: ```browser.get()```)

### Test Configuration:
* ```npm install -g protractor```
* ```webdriver-manager update```
* ```npm install -g httpster```
* ```bower install```

Test start
* you need two terminal windows:
    * in the first go to the app folder ```cd app``` and run ```httpster``` command
    *  in the second terminal window run tests with ```protractor test/protractor.conf.js```


###Before you start:
* [angularjs-getting-started-with-protractor](https://egghead.io/lessons/angularjs-getting-started-with-protractor)
* [protractor](http://angular.github.io/protractor/#/)

Good luck!
