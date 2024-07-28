import { expect, browser, $ } from '@wdio/globals'
import { LandingPage } from '../pageobjects/landingpage.ts'



describe('Login feature', () => {
    let lpage:LandingPage;
    before('Page object creation',async()=>{
         
    })
    beforeEach('page creation',async()=>{
       await  browser.url('/');
       await  browser.waitUntil(
            () => browser.execute(() => document.readyState === 'complete'),
            {
              timeout: 60 * 1000, // 60 seconds
              timeoutMsg: 'Page reload delayed'
            }
          )
   })
    

    it('should login with valid credential', async () => {
     lpage= new LandingPage(browser);
    await lpage.clickloginlink()
    })
})

