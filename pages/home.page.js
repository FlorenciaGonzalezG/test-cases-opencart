import BasePage from '../pages/base.page';

class HomePage extends BasePage {

   //WebElements
   get barraDeBusqueda() {return $('[name="search"]')};
   
   get storeTtl() {return $('//h1/a')};
   
   get mainPage() {return $('#common-home')};
   
   get dropDownMyAccount() {return $('.dropdown')};
   
   get registerBtn() {return $('//a[contains(text(), "Register")]')}  
   
   get loginBtn() {return $('//a[contains(text(), "Login")]')}  

   get topBar() {return $('#top')};


   //-------------------------------------------------------------------------------------------------------//

   /**
    * Escribe el artículo en el campo de búsqueda y presiona Enter
    * @param {String} articulo que se buscará
    */
   async search(articulo) {
    addStep(`Search product: ${articulo}`);
       await super.vaciarCampoYEnviarTexto(await this.barraDeBusqueda, articulo);
       await this.barraDeBusqueda.keys('Enter');
   }

   /**
    * Obtener texto de la barra de búsqueda
    */
   async searchText() {
    addStep('Get text from search bar');
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
    * Clickear sobre login
    */
   async clickLogIn() {
      addStep('Enter login.');
      await super.clickearElemento(this.loginBtn);
   }

}
export default new HomePage();