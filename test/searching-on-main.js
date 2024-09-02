const { pages } = require('../utils/constants/pageUris')
const { getSearch } = require('../page-objects/main-page')
const { searchResultLocators } = require('../page-objects/search-result-page')
const { catalogLocators } = require('../page-objects/catalog-page')
const { expect } = require('chai')


describe('Search on main tests', async function () {
  it('User can find all watch products with one keyword', async function () {
    const product = 'WATCH'

    await driver.get(pages.main);

    await getSearch(product)
    expect(await driver.getCurrentUrl()).to.equal(`https://intershop5.skillbox.ru/?s=${product}&post_type=product`, "Search results does't open")

    const actualTitle = await driver.findElement(searchResultLocators.pageTitle).getText()
    expect(actualTitle).to.eql(`РЕЗУЛЬТАТЫ ПОИСКА: “${product}”`)

    const results = await driver.findElements(searchResultLocators.productItem)
    expect(results.length).to.greaterThanOrEqual(1)

  });

  it('User can find Apple watch product with keywords', async function () {
    const product = 'apple watch'

    await driver.get(pages.main);

    await getSearch(product)
    expect(await driver.getCurrentUrl()).to.equal('https://intershop5.skillbox.ru/product/apple-watch/', "Apple watch product page does't open")

    const actualTitle = await driver.findElement(searchResultLocators.pageTitle).getText()
    expect(actualTitle).to.eql("ВСЕ ТОВАРЫ")

    const ActualProduct = await driver.findElement(catalogLocators.productTitle).getText()
    expect(ActualProduct).to.contains("Apple Watch")
  });

});