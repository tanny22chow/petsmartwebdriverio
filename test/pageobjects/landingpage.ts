
type indexableType = {
    [key: string]: WebdriverIO.Element
};
export class LandingPage {
    bs:WebdriverIO.Browser;
    locators = {
        loginlink: 'a[class="login__sign-in"]'
    }

    webelements: indexableType = {}

    constructor(bs: WebdriverIO.Browser) {
        this.bs=bs;
        this.initializeElements(this.bs);
    }
     initializeElements(browser: WebdriverIO.Browser) {
        for (const [key, val] of Object.entries(this.locators)) {
            let el=  browser.$(val)
             browser.waitUntil(() => el.isClickable())
            Object.defineProperty(this.webelements, key,
                { 
                    value: el
                }

            )
        }
    }
    clickloginlink() {
         this.webelements.loginlink.click().then(()=>{
            console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
         })
    //   this.bs.execute(`$(${this.locators.loginlink}).click()`)
    }
}

