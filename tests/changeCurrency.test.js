import { expect } from 'chai';
import homePage from "../pages/home.page"

let typeCurrency = '';

describe('Currency', () => {
    before('Enter the main page', async () => {
        await homePage.open('/');
        expect (await homePage.topBar.isDisplayed(), 'top bar is not displayed').to.be.true;
     });
    it('Should change the currency', async () => {
        addStep('Perform visual regression on the main page.');
        expect(await browser.checkElement(await homePage.topBar, "opencart-topBar", {}),"Error: Opencart top bar do not match to the original").equal(0);
        await homePage.clickCurrency();
        typeCurrency = "EUR";
        await homePage.changeCurrency(typeCurrency);
        addStep('Verify that type currency changed.');
        expect(await browser.checkElement(await homePage.topBar, "opencart-topBar", {}),).to.not.equal(0);
        typeCurrency = "USD";
        addStep(`Return to original currency ${typeCurrency}.`);
        await homePage.clickCurrency();
        await homePage.changeCurrency(typeCurrency);
        expect(await browser.checkElement(await homePage.topBar, "opencart-topBar", {}),"Error: Opencart top bar do not match to the original").equal(0);
     })
})