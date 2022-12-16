import BasePage from '../pages/base.page';

class BusquedaPage extends BasePage {

   //Elementos Web
   get resultado(){ return $('h4') }
   
   //-------------------------------------------------------------------------------------------------------//

   /**
    * Obtener texto del resultado de la búsqueda
    */
   async obtenerNombreResultado() {
       return await this.resultado.getText();
   }

}

export default new BusquedaPage();