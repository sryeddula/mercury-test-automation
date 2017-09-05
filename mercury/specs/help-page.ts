import { browser, $$, $, element,ElementFinder, by, protractor } from 'protractor'
import {List} from 'linqts'
import { LoginPage } from '../pages/login'
import { HelpSection } from '../components/help'
import { WorkspaceSection } from '../components/workspace'
import { HomePage } from '../pages/home'
import { Defaults } from '../helpers/defaults'
var data = require('../test-data/smoke-test.json')
describe("Help Page", () => {
    var loginPage = new LoginPage()
    var help: HelpSection
    var workspace: WorkspaceSection
    var homePage: HomePage

    describe("WebTrader-889:Welcome page", () => {
        var bodyWidth: number
        loginPage.enterCredentials(data.newuser.username, data.newuser.password)
        loginPage.login()
        it("Login to the webtrader", () => {
            browser.ignoreSynchronization = true
            help = new HelpSection()
            browser.driver.wait(Defaults.ec.visibilityOf(help.container), Defaults.ElementLookupTimeout)
            homePage = new HomePage()
            workspace = new WorkspaceSection()
            help.container.getSize().then(size => {
                expect(size.width).toBeGreaterThan(0)
            })
            homePage.body.getSize().then(bSize =>
                workspace.container.getSize().then(wSize =>
                    help.container.getSize().then(hSize => {
                        expect(wSize.width + hSize.width).toEqual(bSize.width)
                    })
                )
            )
        })
        it("Click on \"?\" icon", ()=>{       
            help.container.getSize().then(previousSize => {
                browser.actions().click(help.toggle).perform()
                browser.driver.wait(Defaults.ec.visibilityOf(help.container), Defaults.ElementLookupTimeout)
                help.container.getSize().then(size =>{
                    expect(size.width).toEqual(previousSize.width)
                    expect(size.height).toEqual(previousSize.height)
                })
            })
        })
        it("Click on any space in the default workspace", ()=>{       
            help.container.getSize().then(previousSize => {
                browser.actions().click(workspace.container).perform()
                browser.driver.wait(Defaults.ec.visibilityOf(help.container), Defaults.ElementLookupTimeout)
                help.container.getSize().then(size =>{
                    expect(size.width).toEqual(previousSize.width)
                    expect(size.height).toEqual(previousSize.height)
                })
            })
        })
        it("Click on dot icon to switch help pages", ()=>{
            let elms =help.dots.filter(elm=>{
                return elm.getAttribute('class').then(text=>{
                    return text.indexOf('active')<0
                })
            })
            let previousText = help.header.getText()
            elms.first().click()
            //browser.actions().click(elms.first()).perform()               
            browser.driver.wait(Defaults.ec.visibilityOf(help.header), Defaults.ElementLookupTimeout)
            let cuurentText = help.header.getText()
            expect(cuurentText).not.toEqual(previousText)      
        })
    })
})