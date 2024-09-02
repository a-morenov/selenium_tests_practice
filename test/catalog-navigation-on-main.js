const { pages } = require('../utils/constants/pageUris')
const { mainLocators } = require('../page-objects/main-page')
const { catalogLocators } = require('../page-objects/catalog-page')
const { expect } = require('chai')


describe('Catalog navigation on main tests', async function () {
  it('User can open tablets section', async function () {
    await driver.get(pages.main);

    await driver.findElement(mainLocators.tabletsPromo).click();
    expect(await driver.getCurrentUrl()).to.equal(pages.tabletsCatalog, "Tablets catalog page does't open")

    const actualTitle = await driver.findElement(catalogLocators.pageTitle).getText()
    expect(actualTitle).to.eql("ПЛАНШЕТЫ")

  });

  it('User can open books section', async function () {
    await driver.get(pages.main);

    await driver.findElement(mainLocators.booksPromo).click();
    expect(await driver.getCurrentUrl()).to.equal(pages.booksCatalog, "Books catalog page does't open")

    const actualTitle = await driver.findElement(catalogLocators.pageTitle).getText()
    expect(actualTitle).to.eql("КНИГИ")

  });

  it('User can open photos section', async function () {
    await driver.get(pages.main);

    await driver.findElement(mainLocators.photosPromo).click();
    expect(await driver.getCurrentUrl()).to.equal(pages.camerasCatalog, "Photos catalog page does't open")

    const actualTitle = await driver.findElement(catalogLocators.pageTitle).getText()
    expect(actualTitle).to.eql("ФОТО/ВИДЕО")

  });

  it('User can open spesial action section', async function () {
    const promoProduct = "ipad-2020-32gb-wi-fi"
    const promoProductName = "iPad 2020 32gb wi-fi"

    await driver.get(pages.main);

    await driver.findElement(mainLocators.iPadPromo).click();
    expect(await driver.getCurrentUrl()).to.equal(`https://intershop5.skillbox.ru/?product=${promoProduct}`, "catalog page does't open")

    const actualTitle = await driver.findElement(catalogLocators.productTitle).getText()
    expect(actualTitle).to.eql(promoProductName)

  });

});