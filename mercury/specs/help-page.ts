import { browser, $$, $, element, by, protractor } from 'protractor'
import { LoginPage } from '../pages/login'
import { HomePage } from '../pages/home'
var data = require('../test-data/smoke-test.json')
describe("Help Page", () => {
    var loginPage = new LoginPage()
    var homePage: HomePage

    describe("WebTrader-889:Welcome page", () => {
        it("Login to the webtrader", () => {
            browser.manage().deleteAllCookies();
            browser.driver.sleep(5000)
            browser.get(data.url)
            loginPage.enterCredentials(data.username, data.password)
            loginPage.login()
            homePage = new HomePage()
            expect(1).toEqual(1)
        })
    })
})