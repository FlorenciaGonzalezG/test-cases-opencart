import { assert } from "chai";
import { expect } from 'chai';
import { DATA } from "../data/user.data.json";
import contactUsPage from "../pages/contactUs.page";
import homePage from "../pages/home.page"
import utilitiesMethods from "../utils/utilitiesMethods";

const footerElement = 'Contact Us'

describe('Footer: Contact Us', () => {
    before('Enter the main page', async () => {
        await homePage.open('/');
        expect(await homePage.mainPage.isDisplayedInViewport(),'Main page is not displayed in the viewport.').to.be.true; 
    });
    it('Should enter to "Contact Us" and send a message.', async () => {
        await homePage.selectFooterBtn(footerElement);
        assert.equal(await contactUsPage.getTtl(), "Contact Us", 'Error: The expected header was not displayed');
        const randomEnquiry = await utilitiesMethods.generateString(100);
        await contactUsPage.contactUsForm(DATA.firstName, DATA.email, `${randomEnquiry}`);
        addStep('Message has been sent successfully.');
        expect(await contactUsPage.successContainer.isDisplayedInViewport(), 'Message has not been sent successfully').to.be.true;
        await contactUsPage.clickContinueBtn();
        addStep('Return to main page.');
        expect(await homePage.mainPage.isDisplayedInViewport(),'Main page is not displayed in the viewport.').to.be.true; 

    })
})