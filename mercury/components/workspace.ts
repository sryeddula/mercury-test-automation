import { element, by, $, ElementFinder } from 'protractor';
export class WorkspaceSection{
    container: ElementFinder
    constructor(){
        this.container= $('app-workspace')
    }
}