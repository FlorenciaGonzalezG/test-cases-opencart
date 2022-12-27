import homePage  from '../pages/home.page';
import loginPage from '../pages/login.page';
import { DATA }  from "../data/login.data.json";
import { assert } from 'chai';

describe('Carry out login', () => {
    it('Should enter to user account', async () => {
        addStep('Enter to main page.');
        await homePage.open('/');
        await homePage.displayDropDown();
        expect(await loginPage.dropDownMenu.isDisplayed(), 'Dropdown menu is not displayed').to.be.true;
        await homePage.clickLogIn();
        expect(await loginPage.logInCol.isDisplayedInViewport(), 'Login column is not displayed in the viewport').to.be.true;
        await loginPage.loginForm(DATA.email, DATA.password);
        addStep('Login to account successfully.');
        assert.equal(await loginPage.getLoginPageSttl(), 'My Account', 'Error: The expected subtitle was not displayed.');
        await loginPage.logoutAccount();
        assert.equal(await loginPage.logoutConfirmMsg(), 'You have been logged off your account. It is now safe to leave the computer.','Error: No se mostro el subtitulo esperado');
        addStep('Return to main page');
        await loginPage.clickContinueBtn();
        expect(await homePage.mainPage.isDisplayedInViewport(), 'Main page is not displayed in the viewport.').to.be.true;
    })
})