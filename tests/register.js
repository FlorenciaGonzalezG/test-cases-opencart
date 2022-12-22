import { assert }         from "chai";
import { DATA }           from "../data/user.data.json"
import { generateString } from "../utils/functionGenerateString";
import homePage           from "../pages/home.page";
import registerPage       from "../pages/register.page";
 
const randomEmail = generateString(8) + '@gmail.com'

describe ('Registrar nuevo usuario', () => {
    it ('Deberia registrar nuevo usuario', async () => {
        await homePage.abrir('/');
        await homePage.desplegarDropDown();
        await expect(await registerPage.dropDownMenu.isDisplayed(), 'Dropdown menu is not displayed.').to.be.true;
        await homePage.clickRegister();
        await assert.equal(await registerPage.getPageTitle(), 'Account','Error: no se mostro el header esperado');
        await registerPage.registerForm(DATA.firstName, DATA.lastName, `${randomEmail}`, DATA.telephone, DATA.password, DATA.passwordConfirm);
        addStep('El usuario se registro con exito.');
        await assert.equal(await registerPage.getsuccessfullyMsg(), 'Congratulations! Your new account has been successfully created!', 'Error: no se mostro el header esperado');
        addStep('Volver a la pagina principal.')
        await registerPage.clickContinueBtn();
        await expect(await registerPage.breadCrumb.isDisplayedInViewport()).to.be.true;
        await registerPage.backHomePage();
        await expect(await homePage.mainPage.isDisplayedInViewport(), 'Main page is not displayed in the viewport.').to.be.true;

    })
})

