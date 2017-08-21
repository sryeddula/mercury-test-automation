import { element, by, $, ElementFinder } from 'protractor';
export class HelpSection{
    toggle: ElementFinder
    constructor()
    {
        this.toggle=$('.toggle-help')
    }
}