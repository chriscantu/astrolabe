/*jshint node:true */
var sauce = require('./saucelabs.secret.js');

exports.config = {
    // A base URL for your application under test. Calls to protractor.get()
    // with relative paths will be prepended with this.
    baseUrl: 'http://localhost:9000',

    sauceUser: sauce.user, 
    sauceKey: sauce.key,

    specs: [
        './stories/**/*.js'
    ],

    framework: 'mocha',

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'firefox'
    },

    allScriptsTimeout: 3000,

    // Options to be passed to mocha
    mochaOpts: {
        reporter: 'spec',
        slow: 1000
    }
};
