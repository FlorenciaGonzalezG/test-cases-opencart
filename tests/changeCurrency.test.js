import homePage from "../pages/home.page"

describe('Currency', () => {
    it('Should change the currency', async () => {
        await homePage.open('/');
        expect (await homePage.topBar.isDisplayed(), 'top bar is not displayed').to.be.true;
        expect(
            await browser.checkElement(await homePage.topBar, "opencart-topBar", {
            }),
            "Error: la barra superior de Opencart no coincide con la original"
        ).equal(0);

    })
})