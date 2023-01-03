import homePage from '../pages/home.page';
import productPage from '../pages/product.page';
import shoppingcartPage from '../pages/shoppingCart.page';
import { assert } from 'chai';
import { expect } from 'chai';
import utilitiesMethods from '../utils/utilitiesMethods';


const productOne    = 'MacBook';
const productTwo    = 'iPhone';
const arrayProducts = [ productOne, productTwo ];
let   arrayPrice    = [];


describe ('Shopping cart',() => {
    arrayProducts.forEach((product) => { 
    it(`Should look for ${product} and add it to shopping cart`, async () => {
        await homePage.open('/');
        await homePage.search(product);
        assert.equal(await homePage.searchText(),(product),'Error: The expected text was not displayed in the search bar');
        await productPage.enterToProduct(product);
        addStep(`Get product price: ${product}`);
        let stringPrice = (await productPage.price());
        let numberPrice = (await utilitiesMethods.makeSplit(stringPrice, "$", 1));
        addStep('Add prices to an array');
        arrayPrice.push(numberPrice);
        assert.equal(await productPage.getPriceProduct(),(product), 'Error: The expected header was not displayed');
        await productPage.addToCart();
        addStep('Get add to cart success message');
        const message = await productPage.successMessage();
        assert.equal(await utilitiesMethods.makeSlice(message,0,-2), `Success: You have added ${product} to your shopping cart!` );
    })
 })
     it ('Should check that the two products were added to the cart', async () => {
        await shoppingcartPage.enterToShoppingCart();
        addStep('Get total cart purchase price');
        const stringTotal = await shoppingcartPage.totalPriceShoppingcart();
        const totalPriceCart = (await utilitiesMethods.makeSplit(stringTotal,"$",1));
        const totalPriceProducts = arrayPrice[0] + arrayPrice[1];
        addStep('Compare product price with cart total price');
        assert.equal(`${totalPriceCart}`, `${totalPriceProducts}`), 'Error: the total prices are not equal';
        await shoppingcartPage.removeProduct();
        await shoppingcartPage.enterToShoppingCart();
        await shoppingcartPage.removeProduct();
        await shoppingcartPage.enterToShoppingCart();
        assert.equal(await shoppingcartPage.allertMessage(), 'Your shopping cart is empty!');
        await homePage.returnMainPage();
        expect(await homePage.mainPage.isDisplayedInViewport()).to.be.true;
    })
})





