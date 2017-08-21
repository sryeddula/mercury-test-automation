import { element, by, $, ElementFinder } from 'protractor';
export class AccountPage {
    clientAccountNumber: ElementFinder
    nameOfTheUser: ElementFinder
    constructor(){
        this.clientAccountNumber = $('.client-account-number');
        this.nameOfTheUser=$('.mode-toggle-container.account')
    }    
}