import { ElementFinder, promise } from 'protractor'

export class Helper {
    static isAttributeValueExist(elm: ElementFinder, attributeName: string, attributeValue: string): promise.Promise<boolean> {
        return elm.getAttribute(attributeName).then(text => {
            if (text === null) {
                return false
            } else {
                return text.indexOf(attributeValue) < 0
            }
        })
    }
}