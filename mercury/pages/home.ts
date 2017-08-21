import {HelpSection} from '../modules/help'
import {HeaderSection} from '../modules/header'
export class HomePage{
    help:HelpSection
    header:HeaderSection
    constructor(){
        this.help = new HelpSection()
        this.header = new HeaderSection()
    }
}