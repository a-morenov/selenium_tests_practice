const { pages } = require('../utils/constants/pageUris')
const { mainLocators } = require('../page-objects/main-page')
const { expect } = require('chai');
const { autorizationLocators } = require('../page-objects/account-page');


describe('Main menu navigation tests', async function () {
  it('User can open catalog', async function () {
    await driver.get(pages.main);

    await driver.findElement(mainLocators.catalogMenu).click();
    expect(await driver.getCurrentUrl()).to.equal(pages.catalog, "Catalog page does't open")

    const actualTitle = await driver.findElement(catalogLocators.pageTitle).getText()
    expect(actualTitle).to.eql("КАТАЛОГ")

  });

  it('User can open autorization page', async function () {
    await driver.get(pages.main);

    await driver.findElement(mainLocators.accountMenu).click();
    expect(await driver.getCurrentUrl()).to.equal(pages.account, "Account page does't open")

    const actualTitle = await driver.findElement(autorizationLocators.pageTitle).getText()
    expect(actualTitle).to.eql("Мой аккаунт")
  });

});