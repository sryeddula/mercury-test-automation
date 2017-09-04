import { protractor } from 'protractor'
export class Defaults {
    static ElementLookupTimeout: number = 10 * 1000
    static ec = protractor.ExpectedConditions
}