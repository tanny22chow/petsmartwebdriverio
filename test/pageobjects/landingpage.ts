import { indexableType, initializeElements, indexableStringType } from './basepage.ts'

export class LandingPage {
    bs: WebdriverIO.Browser;
    locators: indexableStringType = {
        loginlink: 'a[class="login__sign-in"]',
        useremail: '#loginEmail',
        userpwd: '#loginPassword',
        loginbtn: '#services-booking-website > div.ReactModalPortal > div > div > div > div.login__main-login-container > form > div.login__login-cta-wrapper > div.styleguide__cta-container > button',
        perservicesLink: '/',
        groominglink: '//*[text()="grooming"]',
        petshotel: 'a[href="/petshotel"]',
        doggie_day_camplink: 'a[href="/doggie-day-camp"]',
        traininglink: 'a[href="/training"]',
        vetcarelink: '//a[text()="vet care"]',
        helplink: '//a[text()="help"]',
        shoplink: '//a[text()="shop"]'
    }
    webelements: indexableType = {}

    constructor(bs: WebdriverIO.Browser) {
        this.bs = bs;
        initializeElements(this.locators, this.webelements, this.bs)
    }

    async loginwithvalidcreds() {
        await this.bs.execute(`document.querySelector(\'${this.locators.loginlink}\').click()`);
        await this.bs.waitUntil(()=>this.bs.execute('return document.readyState===\'complete\''))
        await this.webelements.useremail.setValue('tanmoy1991chowdhury@gmail.com');
        await this.webelements.userpwd.setValue('Tanmoy@1991');
        await this.bs.execute(`document.querySelector(\'${this.locators.loginbtn}\').click()`);
    }
    async clickgrooming() {
        await this.bs.waitUntil(()=>{
            return this.webelements.groominglink.isClickable()
        },{
            timeout:50000
        })
        await this.webelements.groominglink.click()
    }
}

