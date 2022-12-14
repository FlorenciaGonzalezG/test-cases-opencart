import homePage from '../pages/home.page';
import busquedaPage from '../pages/busqueda.page';
import articuloPage from '../pages/articulo.page';
import { assert } from 'chai';
describe ('Opencart', () => {
    it('Deberia buscar un articulo y agregarlo al carrito', async () => {
        await homePage.abrir('/');
        let articulo = 'MacBook'
        await homePage.buscar(articulo);
        await assert.equal(await homePage.obtenerTextoBusqueda(),(articulo),'Error: no se mostro el texto esperado en la barra de busqueda');
        await assert.equal(await busquedaPage.obtenerNombreResultado(),(articulo), 'Error: no se mostro el header esperado');
        await articuloPage.ingresarAlArticulo()
        await assert.equal(await articuloPage.obtenerNombreArticulo(),(articulo), 'Error: no se mostro el header esperado');
        await articuloPage.anadirAlCarrito()
        await browser.pause(5000);
    })
})

