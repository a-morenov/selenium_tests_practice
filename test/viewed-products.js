const { getSearch } = require('../page-objects/main-page')
const { pages } = require('../utils/constants/pageUris')
const { mainLocators } = require('../page-objects/main-page')
const { expect } = require('chai')


describe('Viewed products tests', async function () {

  it('User can see viewed products', async function () {
    const product = 'apple watch'

    await driver.get(pages.main);

    await getSearch(product)

    await driver.findElement(mainLocators.siteTitle).click()
    expect(await driver.findElement(mainLocators.viewedProducts).isDisplayed(), "Viewed products is not displayed").to.be.true

    const ActualProduct = await driver.findElement(mainLocators.viewedProductTitle).getText()
    expect(ActualProduct).to.contains("Apple Watch")

  });

});