import { browser, $$, $, element, by, protractor } from 'protractor'
import { LoginPage } from '../pages/login'
import { HomePage } from '../pages/home'
var data = require('../test-data/smoke-test.json')

describe("Login", () => {
    var loginPage = new LoginPage()
    var homePage: HomePage
    describe("WebTrader-888:Version check", () => {
        it("User is able to check version on login page or in console", () => {
            browser.actions().mouseMove(loginPage.version).perform()
            expect(loginPage.version.isDisplayed()).toBe(true)
        })
    })
    describe("WebTrader-887:Login to Webtrader", () => {
        it("User enters any Password in Password field", () => {
            loginPage.enterCredentials(data.username, data.password)
            expect(loginPage.getPasswordFieldType()).toBe('password')
        })
        it("User enters valid Username and Password on Login page and click 'Login' button", () => {
            browser.ignoreSynchronization = true
           var ec = protractor.ExpectedConditions;
            loginPage.login()
            homePage = new HomePage()
            browser.debugger()
            expect(browser.driver.wait(ec.visibilityOf(homePage.header.nameOfTheUser), 200000)).toBe(true);
            expect(homePage.header.nameOfTheUser.getText()).toEqual(data.logonusername)
        })
    })

})