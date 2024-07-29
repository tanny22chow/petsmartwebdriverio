import { expect, browser, $ } from '@wdio/globals'
import { LandingPage } from '../pageobjects/landingpage.ts'



describe('Login feature', () => {
    let lpage: LandingPage;
    before('Page object creation', async () => {
        lpage = new LandingPage(browser);
    })
    beforeEach('page creation', async function () {
        await browser.url('/');
    })

    it('should login with valid credential', async function () {
        await lpage.loginwithvalidcreds();
    })
})

