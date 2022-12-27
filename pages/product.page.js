import BasePage from './base.page';


class ProductPage extends BasePage {

   //WebElements

   get producto() {return $('//h4/a')};
   
   get addCartBtn() {return $('#button-cart')};
   
   get productName() {return $('#content').$('h1')};
   
   get successMsg() {return $('.alert.alert-success.alert-dismissible')};
   
   get priceProduct() {return $('//li/h2')};

//---------------------------------------------------------------------------------------------   

/**
 * Ingresar al resultado de la busqueda
 */
   async enterToProduct(producto) {
    addStep(`Enter to the product: ${producto}.`);
    await super.clickearElemento(this.producto);
   }

/**
 * Obtener nombre del producto
 */
   async getPriceProduct() {
    return await this.productName.getText();
   }

/**
 * Anadir producto al carrito 
 */
   async addToCart() {
    addStep('Add product to shopping cart.');
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
    return await this.priceProduct.getText();
   }
}
export default new ProductPage();