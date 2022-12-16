import BasePage from './base.page';


class ProductPage extends BasePage {

   //WebElements

   get producto() { return $('//h4/a') }
   get button() { return $('#button-cart') } 
   get productName() { return $('#content').$('h1')}

//---------------------------------------------------------------------------------------------   

/**
 * Ingresar al resultado de la busqueda
 */
   async ingresarAlProducto() {
    await super.clickearElemento(this.producto);
}

/**
 * Obtener nombre del producto
 */
   async obtenerNombreProducto() {
    return await this.productName.getText();
}

/**
 * Anadir producto al carrito 
 */
   async anadirAlCarrito() {
    await super.clickearElemento(this.button); 
}
   
}
export default new ProductPage();