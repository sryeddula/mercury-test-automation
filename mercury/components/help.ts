import { element, by, $,$$, ElementFinder,ElementArrayFinder } from 'protractor';
export class HelpSection{
    container: ElementFinder
    toggle: ElementFinder
    dots: ElementArrayFinder
    header: ElementFinder
    item: ElementArrayFinder
    constructor()
    {
        this.toggle=$('.toggle-help')
        this.container=$('app-help')
        this.dots=this.container.$$('.help-footer__nav__item')
        this.header=this.container.$('.header')
        this.item=this.container.$$('.help-item p')
    }
}