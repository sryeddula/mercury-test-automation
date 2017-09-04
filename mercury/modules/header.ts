import { element, by, $, ElementFinder } from 'protractor';
export class HeaderSection{
    container: ElementFinder
    nameOfTheUser: ElementFinder
    help:ElementFinder
    constructor()
    {
        this.container=$('app-header')
        this.nameOfTheUser=this.container.$('.mode-toggle-container.account')
        this.help=this.container.$('.toggle-help')
    }
}