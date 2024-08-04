import { expect, browser, $ } from '@wdio/globals'
import { LandingPage } from '../pageobjects/landingpage.ts'
import { Grooming } from '../pageobjects/grooming.ts';
import { Appointmentpage } from '../pageobjects/appointmentpage.ts';



describe('Login feature', () => {
    let lpage: LandingPage;
    let groomingPage: Grooming;
    let appointmentpage: Appointmentpage;
    before('Page object creation', async () => {
    })
    beforeEach('page creation', async function () {
        await browser.url('/');

    })

    it('selcet pet service', async function () {
        lpage = new LandingPage(browser);
        await lpage.clickgrooming()
        groomingPage = new Grooming(browser);
        await groomingPage.storeSelection()
        await groomingPage.clickbathandBrush()
        await lpage.loginwithvalidcreds();
        // appointmentpage = new Appointmentpage(browser)
        // await appointmentpage.completeApointmentBooking()

    })
})

