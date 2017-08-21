// Capabilities to be passed to the webdriver instance.
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var data = require('./test-data/smoke-test.json')

exports.config = {
    onPrepare: function () {
        browser.driver.manage().window().maximize()
        browser.get(data.url)
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: './test-results',
                fileNamePrefix: 'mercury'
            }));
    },
    capabilities: {
        browserName: 'chrome',
        ignoreZoomSetting: true,
        allScriptsTimeout: 120000
    },
    framework: 'jasmine2',
    specs: ['specs/login.js','specs/help-page.js']
}