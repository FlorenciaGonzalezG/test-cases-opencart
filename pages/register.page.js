import BasePage from './base.page';

class registerPage extends BasePage {

    //Web Elements
    get pageTtl() { return $('#content').$('h1') };
   
    get dropDownMenu() {return $('.dropdown-menu.dropdown-menu-right')};

    get firstNameForm() {return $('#input-firstname')};

    get lastNameForm() {return $('#input-lastname')};

    get emailForm() {return $('#input-email')};

    get telephoneForm() {return $('#input-telephone')};
    
    get passwordForm() {return $('#input-password')};

    get passwordConfirmForm() {return $('#input-confirm')};

    get agreeChk() {return $('[type=checkbox]')};

    get continueFormBtn() {return $('[type=submit]')};

    get successfullyMsg() {return $('#content').$('p:nth-child(2)')};
    //p[contains(text(),"Congratulations!")]

    get continueBtn() {return $('.btn.btn-primary')};

    get breadCrumb() {return $('.breadcrumb')};

    get homeBtn() {return $('#logo').$('h1').$('a')};   
    


   

    //-------------------------------------------------------------------------------------------//
    
    /**
     *  Obtener titulo de la pagina
     * @returns String
     */
    async getPageTtl() {
       return await this.pageTtl.getText();
    }

    /**
     * Completar campos del formulario
     * @param {string} firstName 
     * @param {string} lastName 
     * @param {string} email 
     * @param {number} telephone 
     * @param {string} password 
     * @param {string} confirmPassword 
     */

    async registerForm(firstName, lastName, email, telephone, password, confirmPassword) {
        addStep('Llenar formulario de register.');
        await this.firstNameForm.setValue(firstName);
        await this.lastNameForm.setValue(lastName);
        await this.emailForm.setValue(email);
        await this.telephoneForm.setValue(telephone);
        await this.passwordForm.setValue(password);
        await this.passwordConfirmForm.setValue(confirmPassword);
        addStep('Aceptar politicas de privacidad.');
        await super.clickearElemento(this.agreeChk);
        addStep('Enviar formulario.');
        await super.clickearElemento(this.continueFormBtn);
     }
     
     /**
      * Obtener mensaje de confirmacion
      * @returns string
      */
     async getsuccessfullyMsg () {
        return await this.successfullyMsg.getText();
     }

     /**
      * Clickear el boton continue
      */
     async clickContinueBtn() {
        await super.clickearElemento(this.continueBtn);    
     }

     /**
      * Volver a la pagina principal
      */
     async backHomePage() {
        await super.clickearElemento(this.homeBtn);
     }
}
export default new registerPage();