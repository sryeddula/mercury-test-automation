import { element, by, $, ElementFinder } from 'protractor';
export class HeaderSection{
    nameOfTheUser: ElementFinder
    constructor()
    {
        this.nameOfTheUser=$('.mode-toggle-container.account')
    }
}