const { By } = require("selenium-webdriver");

catalogLocators = {

    pageTitle: By.css("[class*='entry-title']"),
    productTitle: By.css("[class*='product_title entry-title']"),
    tvCategory: By.css("li[class*='cat-item cat-item-25'] a"),
    addOnCartButton: By.xpath("//a[@aria-label='Add “LED телевизор XIAOMI Mi TV 4A 32 HD READY” to your cart']"),
    goToCartButton: By.xpath(  "//a[@title='Подробнее']"),
    onSaleTvItem: By.css("span[class*=onsale]"),
    productCard: By.css("li.product"),
    itemsCount: By.css("p.woocommerce-result-count"),

    currentPage: By.css("span[aria-current='page']"),
    pageNumber4: By.xpath("(//a[contains(@class, 'page-numbers')])[3]"),

    catItem: By.xpath("(//span[contains(@class, 'product-title')])[2]"),
}

const addToCart = async () => {
    await driver.findElement(catalogLocators.tvCategory).click();  
    await driver.findElement(catalogLocators.addOnCartButton).click(); 
    await driver.findElement(catalogLocators.goToCartButton).click(); 

}

module.exports = { catalogLocators, addToCart }