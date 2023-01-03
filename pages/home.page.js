import BasePage from '../pages/base.page';

class HomePage extends BasePage {

   //WebElements
   get barraDeBusqueda() {return $('[name="search"]')};
   
   get storeTtl() {return $('h1').$('a')};
   
   get mainPage() {return $('#common-home')};
   
   get dropDownMyAccount() {return $('.dropdown')};
   
   get registerBtn() {return $('//a[contains(text(), "Register")]')};  

   get logoutBtn() {return $('//a[contains(text(), "Logout")]')};

   get logoutMsg() {return $('//p[contains(text(),"logged off")]')};

   get continueBtn() {return $('.btn.btn-primary')};
   
   get loginBtn() {return $('//a[contains(text(), "Login")]')};  

   get topBar() {return $('#top')};

   get currencyBtn() {return $('//span[text()="Currency"]')};

   


   //-------------------------------------------------------------------------------------------------------//

   /**
    * Escribe el artículo en el campo de búsqueda y presiona Enter
    * @param {String} articulo que se buscará
    */
   async search(articulo) {
    addStep(`Search product: ${articulo}.`);
       await super.vaciarCampoYEnviarTexto(await this.barraDeBusqueda, articulo);
       await this.barraDeBusqueda.keys('Enter');
   }

   /**
    * Obtener texto de la barra de búsqueda
    */
   async searchText() {
    addStep('Get text from search bar.');
       return await this.barraDeBusqueda.getValue();
   }

   /**
    * Hacer click sobre el logo para volver a la pagina principal
    */
   async returnMainPage() {
    addStep('Return to the main page.');
      await super.clickearElemento(this.storeTtl);
   }
   
   /**
    * Desplegar dropdown de my account
    */
   async displayDropDown() {
      addStep('Display my account dropdown.');
      await super.clickearElemento(this.dropDownMyAccount);
   }
   
   /**
    * Clickear sobre register 
    */
   async clickRegister() {
      addStep('Enter register.');
      await super.clickearElemento(this.registerBtn);
   }

   /**
    * Clickear sobre logout
    */
   async clickLogout() {
      addStep('Click logout.');
      await super.clickearElemento(this.logoutBtn);
   }

    /**
    * Clickear sobre boton continuar
    */
    async clickContinueBtn() {
      addStep('Click continue button.');
      await super.clickearElemento(this.continueBtn);
   }

   /**
    * Clickear sobre login
    */
   async clickLogIn() {
      addStep('Enter login.');
      await super.clickearElemento(this.loginBtn);
   }

   /**
    * Clickear sobre currency 
    */
   async clickCurrency() {
      addStep('Display currency dropdown.');
      await super.clickearElemento(this.currencyBtn);
   }

   /**
    * Cambiar tipo de moneda
    * @param {String} typeCurrency 
    */
   async changeCurrency(typeCurrency) {
      addStep(`Change currency to ${typeCurrency}.`);
      const currencyBtn = $(`button[name=${typeCurrency}]`);
      await currencyBtn.click();
   }

   /**
    * Elegir un elemento del footer de la pagina
    * @param {string} footerElement 
    */
   async selectFooterBtn(footerElement) {
      addStep(`Select footer element: ${footerElement}.`);
      const footerBtn = $(`//a[contains(text(), "${footerElement}")]`);
      await footerBtn.click();
   }
}
export default new HomePage();