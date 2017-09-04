import { element, by, $, ElementFinder } from 'protractor';
export class HelpSection{
    container: ElementFinder
    toggle: ElementFinder
    constructor()
    {
        this.toggle=$('.toggle-help')
        this.container=$('app-help')
    }
}