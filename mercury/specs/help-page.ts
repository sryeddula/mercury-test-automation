import { browser, $$, $, element, by, protractor } from 'protractor'
import { LoginPage } from '../pages/login'
import { HomePage } from '../pages/home'
var data = require('../test-data/smoke-test.json')
describe("Help Page", () => {
    var loginPage = new LoginPage()
    var homePage: HomePage

    describe("WebTrader-889:Welcome page", () => {

        it("Hello",()=>{
            browser.get(data.url)
        })
        
        var bodyWidth: number

        it("Login to the webtrader", () => {
            try {
                browser.call(() => loginPage.enterCredentials(data.newuser.username, data.newuser.password))
                loginPage.login()
                homePage = new HomePage()
                var bodyWidth: number
                var workspaceWidth: number
                expect($('app-workspace').getSize().then(size => workspaceWidth = size.width)).toBeGreaterThan(0)
            } catch (ex) {
                console.log(ex)
            }
        })
        it("test", () => {
            browser.ignoreSynchronization = true
            var helpWidth: number
            expect($('app-help').getSize().then(size => helpWidth = size.width)).toBeGreaterThan(0)
        })
    })
})