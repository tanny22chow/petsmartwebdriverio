import { indexableType, initializeElements, indexableStringType } from './basepage.ts'
import { VaccinationPage } from '../pageobjects/dialogandpoppus/vaccinationpage.ts'
export class Appointmentpage {


    bs: WebdriverIO.Browser
    locators: indexableStringType = {
        selectStoreTile: '//div[text()="select a store"]/ancestor::div[@class="booking__flow-step"]',
        petList: '.pet-selection__select-a-pet-wrapper > div',
        petlistContinueBtn: '//div[text()=\'continue\']',
        serviceselectioncontinueBtn: '//span[text()=\'continue\']',
        bathandBrushServiceSelect: '//div[text()=\'Bath & Brush\']/ancestor::div[@class=\'service-selection__service-tile-description\']/following-sibling::div[2]',
        nothanksBtn: '//span[text()=\'no thanks\']',
        availableDateTab: '//div[starts-with(@id,\'availability-button-tab-count\')][contains(text(),\'available\')]',
        dateSelectBtn: '//span[text()=\'select\']',
        dateselectionContinueBtn: '//div[text()=\'continue\']/ancestor::button[@id=\'date-selection-continue-button\']',
        addOnNothanksBtn: '//span[text()=\'no thanks\']/parent::button[@class=\'styleguide__primary-cta addon-selection__continue-cta\']',
        completeBookingBtn: '//span[text()=\'complete booking\']/parent::button'

    }
    webelements: indexableType = {}

    constructor(bs: WebdriverIO.Browser) {
        this.bs = bs;
        initializeElements(this.locators, this.webelements, this.bs)
    }

    async selectpetfromlist() {
        await this.bs.waitUntil(()=>{
            return this.webelements.selectStoreTile.isClickable()
        },{
            timeout:50000
        })
        await this.bs.$$(this.locators.petList)[0].click();
        await this.webelements.petlistContinueBtn.click()
    }
    async selectpetservicefromlist() {
        await this.webelements.bathandBrushServiceSelect.click()
        await this.bs.$$(this.locators.serviceselectioncontinueBtnList)[0].click();

    }
    async choosePampering() {
        await this.webelements.nothanksBtn.click()
    }
    async chooseAddon() {
        await this.webelements.addOnNothanksBtn.click()
    }
    async choosDateAndTime() {
        await this.webelements.availableDateTab.click()
        await this.webelements.dateSelectBtn.click()
        await this.webelements.dateselectionContinueBtn.click()
        await new VaccinationPage(this.bs).clickVaccinationBtn()
    }
    async completeBooking() {
        await this.webelements.completeBookingBtn.click()
    }
    async completeApointmentBooking() {
        await this.selectpetfromlist()
        await this.selectpetservicefromlist()
        await this.choosePampering()
        await this.choosDateAndTime()
        await this.chooseAddon()
        await this.completeBooking()
    }
}