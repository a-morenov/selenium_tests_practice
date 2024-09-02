const { pages } = require('../utils/constants/pageUris')
const { catalogLocators, addToCart } = require('../page-objects/catalog-page')
const { cartLocators } = require('../page-objects/cart-page')
const { By } = require("selenium-webdriver");
const { expect } = require('chai');

describe('Selection in catalog tests', async function () {


    // Пользователь может выбрать товар - положить в корзину или добавить в избранное, тестируем через корзину
    // Пользователь может узнать больше о товаре со скидкой
    // Пользователь может посмотреть рекомендованный товар
    // Пользователь может полистать старницы каталога

    //Не делаю проверки с фильтрацией
    it('User can choose product from categories', async function () {
        const tvItemTitle = 'LED телевизор XIAOMI Mi TV 4A 32 HD READY'

        await driver.get(pages.catalog);
        await addToCart()
        expect(await driver.getCurrentUrl()).to.equal(pages.cartPage, "Cart page does not open")

        let actualTitle = await driver.findElement(cartLocators.itemTvTitle).getText()
        await expect(actualTitle).to.equal(tvItemTitle, "Wrong title")
    });

    it('User can reed more about on sale item', async function () {
        await driver.get(pages.catalog);
        await driver.findElement(catalogLocators.tvCategory).click();
        expect(await driver.getCurrentUrl()).to.equal(pages.tvCategoryPage, "Tv page does not open")

        await driver.findElement(catalogLocators.onSaleTvItem).click();
        expect(await driver.getCurrentUrl()).to.equal(pages.tvOnSaleItemPage, "Item page does't open")
    });

    it('User can see product from recomended', async function () {
        await driver.get(pages.catalog);
        await driver.findElement(catalogLocators.catItem).click();
        expect(await driver.getCurrentUrl()).to.equal('https://intershop5.skillbox.ru/product/kotik_kotoromu_norms/', "Page does not open")
    });

    it('User can list category pages ', async function () {
        await driver.get(pages.catalog);
        expect(await driver.findElement(catalogLocators.currentPage).isDisplayed(), "Paging is not displayed").to.be.true
        await driver.findElement(catalogLocators.pageNumber4).click();
        expect(await driver.getCurrentUrl()).to.equal('https://intershop5.skillbox.ru/product-category/catalog/page/4/', "Page 4 does not open")

    });

    it('User can see all products on one page category', async function () {
        await driver.get(pages.catalog);
        await driver.findElement(catalogLocators.tvCategory).click();
        const cards = await driver.findElements(catalogLocators.productCard)
        actualText = await driver.findElement(catalogLocators.itemsCount).getText()
        expect(actualText).to.eql(`Показ всех ${cards.length} элементов`)

    });



});