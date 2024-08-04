export type indexableType = {
    [key: string]: WebdriverIO.Element
};

export type indexableStringType = {
    [key: string]: string
};

export function initializeElements(locators:indexableStringType,webelements:indexableType,browser: WebdriverIO.Browser) {
    for (const [key, val] of Object.entries(locators)) {
        let el = browser.$(val)
        Object.defineProperty(webelements, key,
            {
                value: el
            }

        )
    }
}