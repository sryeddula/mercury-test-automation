import { element, by, $, ElementFinder } from 'protractor';
export class LoginPage {
    username: ElementFinder
    password: ElementFinder
    loginButton: ElementFinder
    accountName: ElementFinder
    version: ElementFinder
    logo: ElementFinder
    constructor() {
        this.username = element(by.name('username'));
        this.password = element(by.name('password'));
        this.loginButton = element(by.buttonText('Login'));
        this.accountName = $('.account');
        this.version = $('.version');
        this.logo=$('.header   .logo')
    }
    enterCredentials(name: string, pass: string) {
        this.username.clear()
        this.username.sendKeys(name)
        this.password.clear()
        this.password.sendKeys(pass)
    }
    getPasswordFieldType() {
        return this.password.getAttribute('type')
    }
    login() {
        this.loginButton.click()
    }
}
