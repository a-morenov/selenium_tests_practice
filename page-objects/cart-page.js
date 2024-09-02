const { By } = require("selenium-webdriver");

cartLocators = {

pageTitle: By.css("[class*='entry-title']"),
itemTvTitle: By.css("[data-title*=Товар] a"),

cartAlert: By.css("[role*='alert']"),

itemPice: By.css("td[data-title*=Цена] bdi"),
cartQuanity: By.css("input[id*=quantity]"),
cartTotal: By.css("td[data-title*='Общая стоимость'] bdi"),

removeButton: By.css("a[aria-label*='Remove this item']"),
removeAlert: By.css("[role*='alert']"),
restoreButton: By.css("a.restore-item"),

checkoutButton: By.css("a[class*=checkout-button]"),

promocodeInput: By.css("input#coupon_code"),
promocodeButton: By.css("button[name*=apply_coupon]"),
promocodeRemove: By.css("a[data-coupon*='sert500']"),
discountTitle: By.css("tr[class*='cart-discount'] th"),
orderTotal: By.css("tr[class*=order-total] bdi"),

}

const consumePromocode = async (promocode) => {
    await driver.findElement(cartLocators.promocodeInput).click();  
    await driver.findElement(cartLocators.promocodeInput).sendKeys(promocode)
    await driver.findElement(cartLocators.promocodeButton).click(); 

}

module.exports = { cartLocators, consumePromocode }