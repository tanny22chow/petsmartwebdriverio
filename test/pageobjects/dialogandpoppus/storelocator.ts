import { indexableType, initializeElements, indexableStringType } from '../basepage.ts'

export class Storelocator {

    bs: WebdriverIO.Browser
    locators: indexableStringType = {
        searchfieldwithzip: '#search-stores-input',
        searchBtn: '//span[text()="Search"]/parent::button',
        selectStoreFromList:'//button[starts-with(@id,\'select-store\')]'
    }
    webelements: indexableType = {}

    constructor(bs: WebdriverIO.Browser) {
        this.bs = bs;
        initializeElements(this.locators, this.webelements, this.bs)
    }
    async enterZip() {
        await this.webelements.searchfieldwithzip.click()
        await this.bs.action('pointer').down().up()
        await this.bs.action('key').down('A').down('Z').down(' ')
        .down('8').down('5').down('0').down('1').down('5').perform()
        await this.webelements.searchBtn.click()
        await this.bs.$$(this.locators.selectStoreFromList)[0].click()
    }
}