const { expect } = require('chai');

const { pages } = require('../utils/constants/pageUris')
const {  checkoutOnSaleItem } = require('../page-objects/main-page')
const {  getAutorize } = require('../page-objects/account-page');
const { checkoutLocators, orderRecivedLocators, clickCheckoutButton } = require('../page-objects/checkout-page');



describe('Make order tests', async function () {

  it('User can go to checkout', async function () {
    await driver.get(pages.main)
    const login = 'ammorenov'
    const password = 'Qwerty123!'
  
    await driver.get(pages.main)
    await checkoutOnSaleItem()
    await getAutorize(login,password)
    expect(await driver.getCurrentUrl()).to.equal(pages.checkout, "Checkout page does't open")
    title = await driver.findElement(checkoutLocators.pageTitle).getText()
    await expect(title).to.equal("Оформление заказа")

    await driver.get(pages.cartPage)
    await driver.findElement(cartLocators.removeButton).click()
  });

  it('User can make order', async function () {

    await driver.get(pages.main)
    const login = 'ammorenov'
    const password = 'Qwerty123!'
  
    await driver.get(pages.main)
    await checkoutOnSaleItem()
    await getAutorize(login,password)
    await clickCheckoutButton(driver)
    let sucess = await driver.findElement(orderRecivedLocators.successNotice).getText()
    await expect(sucess).to.equal("Спасибо! Ваш заказ был получен.")
  });

  it('User can t make order without filling in require fields', async function () {
    await driver.get(pages.main)
    const login = 'test_login'
    const password = 'Test_password!'
  
    await driver.get(pages.main)
    await checkoutOnSaleItem()
    await getAutorize(login,password)

    await clickCheckoutButton(driver)
    let alert = await driver.findElement(checkoutLocators.requireAlert).getText()
    await expect(alert).to.equal("Город / Населенный пункт для выставления счета обязательное поле.")

  });



});