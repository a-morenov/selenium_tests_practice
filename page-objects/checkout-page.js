const { By, until, driver } = require("selenium-webdriver");

checkoutLocators = {

pageTitle: By.css("h2[class*=post-title]"),
checkoutButton: By.css("form button[id*='place_order']"),

requireAlert: By.css("li[data-id*='billing_city']"),
emailRequireAlert: By.css("li[data-id*='billing_email']"),

}

orderRecivedLocators = { 
    successNotice: By.css("p[class*='woocommerce-notice']")
}

async function clickCheckoutButton(driver) {
    let checkoutButton = await driver.findElement(checkoutLocators.checkoutButton);
    const actions = driver.actions({async: true});
    await actions.move({origin: checkoutButton}).click().perform();
}

module.exports = { checkoutLocators, clickCheckoutButton, orderRecivedLocators }