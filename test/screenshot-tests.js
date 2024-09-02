const { pages } = require('../utils/constants/pageUris')
const percySnapshot = require('@percy/selenium-webdriver');


describe('Screenshot tests', async function () {
 

  it('Main page snapshot', async function () {
    
    await driver.get(pages.main);
    await percySnapshot(driver, 'Main-page')
        
  });

  it('Catalog page snapshot', async function () {
    
    await driver.get(pages.catalog);
    await percySnapshot(driver, 'Catalog-page')
        
  });

});