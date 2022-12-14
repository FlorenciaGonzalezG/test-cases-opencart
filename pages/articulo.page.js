import BasePage from '../pages/base.page';

class ArticuloPage extends BasePage {

   //WebElements
   get articulo() { return $('=MacBook') }
   get button() { return $('#button-cart') }


   async ingresarAlArticulo() {
    await super.clickearElemento(this.articulo);
}
   async obtenerNombreArticulo() {
    return await this.articulo.getText();
}
   async anadirAlCarrito() {
    await super.clickearElemento(this.button); 
}
   
}
export default new ArticuloPage();