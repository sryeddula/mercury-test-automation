import { element, by, $, ElementFinder } from 'protractor';
export class HeaderSection{
    container: ElementFinder
    nameOfTheUser: ElementFinder
    help:ElementFinder
    constructor()
    {
        this.container=$('app-header')
        this.nameOfTheUser=this.container.$('.user-menu__account')
        this.help=this.container.$('.toggle-help')
    }
}