import {indexableType,initializeElements,indexableStringType} from './basepage.ts'
import {Storelocator} from '../pageobjects/dialogandpoppus/storelocator.ts'

export class Grooming{

    bs:WebdriverIO.Browser
    locators:indexableStringType={
        selectStoreLink:'//a[text()="Select a store"]',
        bathandbrushTile:'//span//div[text()=\'Bath & Brush\']',
        bathandbrushwithFurminatorTile:'//span//div[text()=\'Bath & Brush with FURminator\']',
        bathAndfullHaircutTile:'//span//div[text()=\'Bath & Full Haircut\']',
        bathAndfullHaircutwithFurminatorTile:'//span//div[text()=\'Bath & Full Haircut with FURminator\']',
    }
    webelements: indexableType = {}

    constructor(bs: WebdriverIO.Browser) {
        this.bs = bs;
        initializeElements(this.locators, this.webelements, this.bs)
    }

    async clickbathandBrush(){
        await this.webelements.bathandbrushTile.click()
    }
    async storeSelection(){
        await this.webelements.selectStoreLink.click()
        await new Storelocator(this.bs).enterZip()

    }
}