import { $, ElementFinder } from 'protractor';
import { HelpSection } from '../modules/help'
import { HeaderSection } from '../modules/header'
import { WorkspaceSection } from '../modules/workspace'
export class HomePage {
    help: HelpSection
    header: HeaderSection
    workspace: WorkspaceSection
    body: ElementFinder
    constructor() {
        this.help = new HelpSection()
        this.header = new HeaderSection()
        this.workspace = new WorkspaceSection()
    }
}