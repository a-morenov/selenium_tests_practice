const { By } = require("selenium-webdriver");

mainLocators = {
siteTitle: By.css("[class*='site-title']"),
 searchField: By.css(".search-field"),
 searchSubmit: By.xpath("//button[contains(@class, 'searchsubmit')]"),
 loginButton: By.css("[class*='login-woocommerce']"),
 logoutButton: By.css("a[class*=logout]"),
    
 catalogMenu: By.id("menu-item-46"),
 accountMenu: By.id("menu-item-30"),
 cartMenu: By.id("menu-item-29"),
 checkouttMenu: By.id("menu-item-31"),

 booksPromo: By.id("accesspress_storemo-2"),
 tabletsPromo: By.id("accesspress_storemo-3"),
 photosPromo: By.id("accesspress_storemo-4"),

 onSaleLabel: By.css("span[class*=onsale]"),
 onSaleItem: By.css("a[title*='Котик обыкновенный супер']"),

 iPadPromo: By.id("accesspress_store_full_promo-2"),
 iPadPromoButton: By.xpath("//*[contains(@id, 'accesspress_store_full_promo-2')]//*[contains(@class, 'promo-link-btn')]"),

 viewedProducts: By.css("[class*='widget_recently_viewed_products']"),
 viewedProductTitle: By.css("[class*='widget_recently_viewed_products'] [class*='product-title']"),


 
}

const checkoutOnSaleItem = async() => {
    await driver.findElement(mainLocators.onSaleItem).click()
    await driver.findElement(By.css("button[name*='add-to-cart']")).click()
    await driver.findElement(By.css("a[class*=wc-forward]")).click()
    await driver.findElement(By.css("a[class*=checkout-button]")).click()
    await driver.findElement(By.css("a[class*=showlogin]")).click() 
}

 const getSearch = async (query) => {
    await driver.findElement(mainLocators.searchField).click();   
    await driver.findElement(mainLocators.searchField).sendKeys(query)
    await driver.findElement(mainLocators.searchSubmit).click()

}

module.exports = {getSearch, checkoutOnSaleItem, mainLocators}