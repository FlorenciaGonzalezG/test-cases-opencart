import { assert } from 'chai';
import { expect } from 'chai';
import { DATA }  from "../data/login.data.json";
import homePage  from '../pages/home.page';
import loginPage from '../pages/login.page';



describe('Carry out login', () => {
    before('Enter the main page', async () => {
         await homePage.open('/');
         expect(await homePage.mainPage.isDisplayedInViewport(),'Main page is not displayed in the viewport.').to.be.true; 
     });
    it('Should enter to user account', async () => {
        await homePage.displayDropDown();
        expect(await loginPage.dropDownMenu.isDisplayed(), 'Dropdown menu is not displayed').to.be.true;
        await homePage.clickLogIn();
        expect(await loginPage.logInCol.isDisplayedInViewport(), 'Login column is not displayed in the viewport').to.be.true;
        await loginPage.loginForm(DATA.email, DATA.password);
        addStep('Login to account successfully.');
        assert.equal(await loginPage.getLoginPageSttl(), 'My Account', 'Error: The expected subtitle was not displayed.');
        await loginPage.logoutAccount();
        assert.equal(await loginPage.logoutConfirmMsg(), 'You have been logged off your account. It is now safe to leave the computer.','Error: The expected subtitle was not displayed.');
        addStep('Return to main page');
        await loginPage.clickContinueBtn();
        expect(await homePage.mainPage.isDisplayedInViewport(), 'Main page is not displayed in the viewport.').to.be.true;
    })
})