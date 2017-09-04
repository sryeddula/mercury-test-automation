import { $, ElementFinder } from 'protractor';
import { HelpSection } from '../components/help'
import { HeaderSection } from '../components/header'
import { WorkspaceSection } from '../components/workspace'
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