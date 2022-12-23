import BasePage from './base.page';

class shoppingcartPage extends BasePage {

    //Web Elements 

    get shoppingCartBtn() {return $('#cart-total')};
    
    get total() {return $('//tr[4]/td[2]')};
    
    get removeBtn() {return $('.btn.btn-danger.btn-xs')};
    // usar child
    
    get allertMsg() {return $('//li/p')}; 

    //--------------------------------------------------------------------------------------------

    /**
     * Ingresar al shopping cart
     */
    async ingresarAlCarrito() {
      addStep('Ingresar al carrito');
        await super.clickearElemento(this.shoppingCartBtn);
    }

    /**
     * Obtener el precio total del carrito 
     */
    async totalPriceShoppingcart() {
        return await this.total.getText();
    }

    /**
     * Eliminar producto del carrito
     */
    async removeProduct() {
      addStep('Eliminar productos del carrito');
        await super.clickearElemento(this.removeBtn);
    }

    /**
     * Obtener alerta de que el carrito esta vacio
     */
    async allertMessage() {
        addStep('Allert message: Your shopping cart is empty!');
        return await this.allertMsg.getText();
    }


}
export default new shoppingcartPage();