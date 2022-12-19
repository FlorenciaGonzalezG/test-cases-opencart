import BasePage from './base.page';


class ProductPage extends BasePage {

   //WebElements

   get producto()      { return $('//h4/a') };
   get addCartBtn()    { return $('#button-cart') } ;
   get productName()   { return $('#content').$('h1') };
   get successMsg()    { return $('.alert.alert-success.alert-dismissible') };
   get priceProduct()  { return $('//li/h2') };

//---------------------------------------------------------------------------------------------   

/**
 * Ingresar al resultado de la busqueda
 */
   async ingresarAlProducto(producto) {
    addStep(`Ingresar al producto: ${producto}.`);
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
    addStep('Agregar producto al carrito.');
    await super.clickearElemento(this.addCartBtn); 
   }  

/**
 * Obtener mensaje de confirmacion 
 */
   async successMessage() {
    return await this.successMsg.getText();
   }

/**
 * Obtener precio del producto
 */
   async price() {
    return await this.priceProduct.getText()
   }
}
export default new ProductPage();