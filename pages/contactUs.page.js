import BasePage from '../pages/base.page';

class ContactUsPage extends BasePage {

    //Web elements

    get nameForm() {return $('#input-name')};

    get emailForm() {return $('#input-email')};

    get enquiryForm() {return $('#input-enquiry')};

    get submitBtn() {return $('.btn.btn-primary')};

    get contactUsTtl() {return $('//h1[text()= "Contact Us"]')};

    get successContainer() {return $('#common-success')};

    get continueBtn() {return $('.btn.btn-primary')};

    //---------------------------------------------------------------------------------//

    /**
     * Obtener titulo de la pagina contact us
     * @returns string
     */
    async getTtl() {
        return await this.contactUsTtl.getText();
    }

    /**
     * Completar formulario de contact us
     * @param {string} name 
     * @param {string} email 
     * @param {string} enquiry 
     */
    async contactUsForm(name, email, enquiry) {
        addStep('Fill contact us form.');
        await this.nameForm.setValue(name);
        await this.emailForm.setValue(email);
        await this.enquiryForm.setValue(enquiry);
        addStep('Send form.');
        await this.submitBtn.click();

    }

    /**
     * Clickear en el boton continuar
     */
    async clickContinueBtn() {
        addStep('Click on the continue button.')
        await this.continueBtn.click();
    }

}
export default new ContactUsPage();