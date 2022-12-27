import { assert } from "chai";
import { DATA } from "../data/user.data.json";
import utilitiesMethods from "../utils/utilitiesMethods";
import homePage from "../pages/home.page";
import registerPage from "../pages/register.page";
 


describe ('Register new user', () => {
    it ('Should register new user', async () => {
        await homePage.open('/');
        await homePage.displayDropDown();
        expect(await registerPage.dropDownMenu.isDisplayed(), 'Dropdown menu is not displayed.').to.be.true;
        await homePage.clickRegister();
        assert.equal(await registerPage.getPageTtl(), 'Account','Error: The expected header was not displayed');
        const randomEmail = await utilitiesMethods.generateString(8) + '@gmail.com';
        await registerPage.registerForm(DATA.firstName, DATA.lastName, `${randomEmail}`, DATA.telephone, DATA.password, DATA.passwordConfirm);
        addStep('The user registered successfully.');
        assert.equal(await registerPage.getsuccessfullyMsg(), 'Congratulations! Your new account has been successfully created!', 'The expected header was not displayed');
        addStep('Return to main page.');
        await registerPage.clickContinueBtn();
        expect(await registerPage.breadCrumb.isDisplayedInViewport()).to.be.true;
        await registerPage.backHomePage();
        expect(await homePage.mainPage.isDisplayedInViewport(), 'Main page is not displayed in the viewport.').to.be.true;

    })
})

