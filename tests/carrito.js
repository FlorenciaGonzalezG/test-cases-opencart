import { expect } from 'chai';
import homePage from '../pages/home.page';
import busquedaPage from '../pages/busqueda.page';
import productPage from '../pages/product.page';


const productOne = 'MacBook';
const productTwo = 'iPhone';
const Arrayproducts = [productOne, productTwo]

describe ('Opencart', function () {
    Arrayproducts.forEach((product) => { 
    it(`Deberia buscar ${product} y agregarlo al carrito`, async () => {
        await homePage.abrir('/');
        await homePage.buscar(product);
        await assert.equal(await homePage.obtenerTextoBusqueda(),(product),'Error: no se mostro el texto esperado en la barra de busqueda');
        await assert.equal(await busquedaPage.obtenerNombreResultado(),(product), 'Error: no se mostro el header esperado');
        await productPage.ingresarAlProducto(product)
        await assert.equal(await productPage.obtenerNombreProducto(),(product), 'Error: no se mostro el header esperado');
        await productPage.anadirAlCarrito()
        await browser.pause(5000);
    })
})
})
