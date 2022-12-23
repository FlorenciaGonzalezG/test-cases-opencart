import homePage from '../pages/home.page';
import productPage from '../pages/product.page';
import shoppingcartPage from '../pages/shoppingcart.page';
import { assert } from 'chai';
import utilitiesMethods from '../utils/utilitiesMethods';


const productOne    = 'MacBook';
const productTwo    = 'iPhone';
const arrayProducts = [ productOne, productTwo ];
let   arrayPrice    = [];


describe ('Shopping cart',() => {
    arrayProducts.forEach((product) => { 
    it(`Deberia buscar ${product} y agregarlo al carrito`, async () => {
        await homePage.abrir('/');
        await homePage.buscar(product);
        assert.equal(await homePage.obtenerTextoBusqueda(),(product),'Error: no se mostro el texto esperado en la barra de busqueda');
        await productPage.ingresarAlProducto(product);
        addStep(`Obtener precio del producto: ${product}`);
        let stringPrice = (await productPage.price());
        let numberPrice = (await utilitiesMethods.makeSplit(stringPrice, "$", 1));
        addStep('Agregar los precios a un array');
        arrayPrice.push(numberPrice);
        assert.equal(await productPage.obtenerNombreProducto(),(product), 'Error: no se mostro el header esperado');
        await productPage.anadirAlCarrito();
        addStep('Obtener mensaje de exito de agregado al carrito');
        const message = await productPage.successMessage();
        assert.equal(await utilitiesMethods.makeSlice(message,0,-2), `Success: You have added ${product} to your shopping cart!` );
    })
 })
     it ('Deberia chequear que los dos productos se agregaron al carrito', async () => {
        await shoppingcartPage.ingresarAlCarrito();
        addStep('Obtener precio del total de la compra del carrito');
        const stringTotal = await shoppingcartPage.totalPriceShoppingcart();
        const totalPriceCart = (await utilitiesMethods.makeSplit(stringTotal,"$",1));
        const totalPriceProducts = arrayPrice[0] + arrayPrice[1];
        addStep('Comparar precio de los productos con precio total del carrito');
        assert.equal(`${totalPriceCart}`, `${totalPriceProducts}`), 'Error: los precios totales no son iguales';
        await shoppingcartPage.removeProduct();
        await shoppingcartPage.ingresarAlCarrito();
        await shoppingcartPage.removeProduct();
        await shoppingcartPage.ingresarAlCarrito();
        assert.equal(await shoppingcartPage.allertMessage(), 'Your shopping cart is empty!');
        await homePage.returnMainPage();
        await expect(await homePage.mainPage.isDisplayedInViewport()).to.be.true;
    })
})




