const { pages } = require('../utils/constants/pageUris')
const { catalogLocators, addToCart } = require('../page-objects/catalog-page')
const { cartLocators, consumePromocode } = require('../page-objects/cart-page')
const { By, Key } = require("selenium-webdriver");
const { expect } = require('chai');

describe('Cart tests', async function () {


    // Пользователь может посмотреть стоимость товаров в корзине
    // Пользователь может перейти к оформлению 
    // Пользователь может посмотреть стоимость товаров с учетом скидки по купону: sert500
    // Пользователь не может применить несуществующий купон
    // Пользователь может удалить товар из корзины
    // Пользователь может восстановить удаленный товар товар 

    const promocode = 'SERT500'
    const nullPromocode = 'SERT5000'
    const expectedItemPrice = "11990,00₽"
    const expectedCartTotal = "23980,00₽"
    const totalPriceWithDiscount = '11490,00₽'
    const tvItemTitle = 'LED телевизор XIAOMI Mi TV 4A 32 HD READY'

    it('User can see cart total price', async function () {


        await driver.get(pages.catalog);
        await addToCart()
        actualItemPrice = await driver.findElement(cartLocators.itemPice).getText()
        expect(actualItemPrice).to.eql(expectedItemPrice)

        actualCartTotal = await driver.findElement(cartLocators.cartTotal).getText()
        expect(actualCartTotal).to.eql(expectedItemPrice)

        await driver.findElement(cartLocators.cartQuanity).clear()
        await driver.findElement(cartLocators.cartQuanity).sendKeys('2')
        await driver.findElement(cartLocators.cartQuanity).sendKeys(Key.ENTER)
        await driver.findElement(cartLocators.cartAlert)

        actualItemPrice = await driver.findElement(cartLocators.itemPice).getText()
        expect(actualItemPrice).to.eql(expectedItemPrice)

        actualCartTotal = await driver.findElement(cartLocators.cartTotal).getText()
        expect(actualCartTotal).to.eql(expectedCartTotal)


    });

    it('User can go to checkout', async function () {

        await driver.get(pages.catalog);
        await addToCart()
        await driver.findElement(cartLocators.checkoutButton).click()
        expect(await driver.getCurrentUrl()).to.equal(pages.checkout, "Checkout page does not open")

    });

    it('User can see total price with sert500 promocode', async function () {

        await driver.get(pages.catalog);
        await addToCart()
        await consumePromocode(promocode)
        let alert = await driver.findElement(cartLocators.cartAlert).getText()
        expect(alert).to.eql(`Купон успешно добавлен.`)

        actualItemPrice = await driver.findElement(cartLocators.itemPice).getText()
        expect(actualItemPrice).to.eql(expectedItemPrice)

        actualCartTotal = await driver.findElement(cartLocators.cartTotal).getText()
        expect(actualCartTotal).to.eql(expectedItemPrice)

        let discountInfo = await driver.findElement(cartLocators.discountTitle).getText()
        expect(discountInfo).to.eql(`СКИДКА: ${promocode}`)

        actualOrderPrice = await driver.findElement(cartLocators.orderTotal).getText()
        expect(actualOrderPrice).to.eql(totalPriceWithDiscount)

    });

    it('User can not activate not existing promocode', async function () {
        await driver.get(pages.catalog);
        await addToCart()
        await consumePromocode(nullPromocode)
        let alert = await driver.findElement(cartLocators.cartAlert).getText()
        expect(alert).to.eql(`Неверный купон.`)

        actualOrderPrice = await driver.findElement(cartLocators.orderTotal).getText()
        expect(actualOrderPrice).to.eql(expectedItemPrice)
    });

    it('User can remove item from cart', async function () {
        await driver.get(pages.catalog);
        await addToCart()
        await driver.findElement(cartLocators.removeButton).click()
        let alert = await driver.findElement(cartLocators.removeAlert).getText()
        expect(alert).to.eql(`“${tvItemTitle}” удален. Вернуть?`)
        await driver.findElement(cartLocators.restoreButton).click()
    });

    it('User can undo item to card after removing', async function () {

        await driver.get(pages.catalog);
        await addToCart()
        await driver.findElement(cartLocators.removeButton).click()
        await driver.findElement(cartLocators.restoreButton).click()
        actualItemPrice = await driver.findElement(cartLocators.itemPice).getText()
        expect(actualItemPrice).to.eql(expectedItemPrice)

    });

});