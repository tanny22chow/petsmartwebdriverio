import { indexableType, initializeElements, indexableStringType } from '../basepage.ts'

export class VaccinationPage {

    bs: WebdriverIO.Browser
    locators: indexableStringType = {
        vaccinationBtn:'//span[text()=\'I will bring proof of vaccination\']/parent::button'
    }
    webelements: indexableType = {}

    constructor(bs: WebdriverIO.Browser) {
        this.bs = bs;
        initializeElements(this.locators, this.webelements, this.bs)
    }
    async clickVaccinationBtn(){
        this.webelements.vaccinationBtn.click()
    }
}