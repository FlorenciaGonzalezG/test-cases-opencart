import BasePage from './base.page';

class LogInPage extends BasePage {

    //Web elements

    get logInCol() {return $('#content')};

    get dropDownMenu() {return $('.dropdown-menu.dropdown-menu-right')};

    get emailForm() {return $('#input-email')};

    get passwordForm() {return $('#input-password')};

    get loginBtn() {return $('input.btn.btn-primary')};

    get loginPageSttl() {return $('//h2[contains(text(), "My Account")]')};

    get logout() {return $('//div/a[contains(text(), "Logout")]')};

    get logoutSttl() {return $('//p[contains(text(), "You have been logged off")]')};

    get continueBtn() {return $('.btn.btn-primary')};

    //--------------------------------------------------------------------------------------------------//

      /**
     * Completar campos del formulario
     * @param {string} email 
     * @param {string} password 
     */

     async loginForm(email, password) {
        addStep('Fill login fields.');
        await this.emailForm.setValue(email)
        await this.passwordForm.setValue(password);
        addStep('Send form.');
        await super.clickearElemento(this.loginBtn);
     }
    
     /**
      * Obtener subtitulo de la pagina del login
      * @returns string
      */
     async getLoginPageSttl() {
        return await this.loginPageSttl.getText();
     }
     /**
      * Salir de la cuenta
      */
     async logoutAccount() {
        addStep('Logout account.');
        await super.clickearElemento(this.logout);
     }

     /**
      * Obtener texto de confirmacion de logout
      * @returns string
      */
     async logoutConfirmMsg() {
       return await this.logoutSttl.getText();
     }

     /**
      * Clickear boton continuar
      */
     async clickContinueBtn() {
        await super.clickearElemento(this.continueBtn);
     }
}

export default new LogInPage();