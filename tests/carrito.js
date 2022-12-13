// import homePage from '../pages/home.page';
// import busquedaPage from '../pages/busqueda.page';

// describe ('Opencart', () => {
//     it('Deberia buscar un articulo', async () => {
//         await homePage.abrir('/');
//         let articulo = 'iPhone'
//         await homePage.buscar(articulo);
//         //await assert.equal(await homePage.obtenerTextoBusqueda(),(articulo),'Error: no se mostro el texto esperado en la barra de busqueda');
//         //await assert.equal(await busquedaPage.obtenerNombreResultado(),(articulo), 'Error: no se mostro el header esperado');

//     })
// })

describe('OpenCart', () => {
    it('Debería buscar iPhone', async () => {
      await browser.url('/');
      let logo = await $('#logo');
    });
 });