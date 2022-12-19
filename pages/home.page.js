import BasePage from '../pages/base.page';

class HomePage extends BasePage {

   //WebElements
   get barraDeBusqueda()  { return $('[name="search"]') };
   get storeTtl()         { return $('//h1/a') };
   get mainPage()         { return $('#common-home') }


   //-------------------------------------------------------------------------------------------------------//

   /**
    * Escribe el artículo en el campo de búsqueda y presiona Enter
    * @param {String} articulo que se buscará
    */
   async buscar(articulo) {
    addStep(`Buscar producto: ${articulo}`);
       await super.vaciarCampoYEnviarTexto(await this.barraDeBusqueda, articulo);
       await this.barraDeBusqueda.keys('Enter');
   }

   /**
    * Obtener texto de la barra de búsqueda
    */
   async obtenerTextoBusqueda() {
    addStep('Obtener texto de la barra de búsqueda');
       return await this.barraDeBusqueda.getValue();
   }

   /**
    * Hacer click sobre el logo para volver a la pagina principal
    */
   async returnMainPage() {
    addStep('Retorna a la pagina principal.');
      await super.clickearElemento(this.storeTtl);
   }
   
 
   

}
export default new HomePage();