const { By } = require("selenium-webdriver");

searchResultLocators = {
    productItem: By.xpath("//li[contains(@class, 'type-product')]"),
    pageTitle: By.css("[class*='entry-title']")
}

module.exports = {searchResultLocators}