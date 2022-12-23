import homePage  from '../pages/home.page';
import loginPage from '../pages/login.page';
import { DATA }  from "../data/login.data.json";
import { assert } from 'chai';

describe('Realizar login', () => {
    it('Deberia ingresar a la cuenta del usuario', async () => {
        addStep('Ingresar a la pagina principal.');
        await homePage.abrir('/');
        await homePage.desplegarDropDown();
        expect(await loginPage.dropDownMenu.isDisplayed(), 'Dropdown menu is not displayed').to.be.true;
        await homePage.clickLogIn();
        expect(await loginPage.logInCol.isDisplayedInViewport(), 'Login column is not displayed in the viewport').to.be.true;
        await loginPage.loginForm(DATA.email, DATA.password);
        addStep('Se ingreso a la cuenta con exito.');
        assert.equal(await loginPage.getLoginPageSttl(), 'My Account', 'Error: No se mostro el subtitulo esperado.');
        await loginPage.logoutAccount();
        assert.equal(await loginPage.logoutConfirmMsg(), 'You have been logged off your account. It is now safe to leave the computer.','Error: No se mostro el subtitulo esperado');
        addStep('Volver a la pagina principal');
        await loginPage.clickContinueBtn();
        expect(await homePage.mainPage.isDisplayedInViewport(), 'Main page is not displayed in the viewport.').to.be.true;
    })
})