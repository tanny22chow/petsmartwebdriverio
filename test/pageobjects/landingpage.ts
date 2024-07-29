
type indexableType = {
    [key: string]: WebdriverIO.Element
};
export class LandingPage {
    bs: WebdriverIO.Browser;
    locators = {
        loginlink: 'a[class="login__sign-in"]',
        useremail: '#loginEmail',
        userpwd: '#loginPassword',
        loginbtn: '#services-booking-website > div.ReactModalPortal > div > div > div > div.login__main-login-container > form > div.login__login-cta-wrapper > div.styleguide__cta-container > button > span'
    }

    webelements: indexableType = {}

    constructor(bs: WebdriverIO.Browser) {
        this.bs = bs;
        this.initializeElements(this.bs);
    }
    initializeElements(browser: WebdriverIO.Browser) {
        for (const [key, val] of Object.entries(this.locators)) {
            let el = browser.$(val)
            Object.defineProperty(this.webelements, key,
                {
                    value: el
                }

            )
        }
    }
    async loginwithvalidcreds() {
        //console.log(this.bs===browser)
        await this.bs.execute(`document.querySelector(\'${this.locators.loginlink}\').click()`);
        await this.webelements.useremail.setValue('tanmoy1991chowdhury@gmail.com');
        await this.webelements.userpwd.setValue('Tanmoy@1991');
        await this.webelements.loginbtn.click();
    }
}

