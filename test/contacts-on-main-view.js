const { pages } = require('../utils/constants/pageUris')
const { mainLocators } = require('../page-objects/main-page')
const { By } = require("selenium-webdriver");
const { expect } = require('chai');

describe.skip('User can see Intershop contacts', async function () {
     
    it('User can see Intershop contacts on main page footer', async function () {
        const expectedPhone = ' +7-999-123-12-12'
        const expectedEmail = ' skillbox@skillbox.ru'
      
        await driver.get(pages.main);
      
        actualPhone = await driver.findElement(By.xpath("(//*[contains(@class,'text-5-value')])[1]")).getText();
       
        expect(actualPhone).to.eql(expectedPhone)

        //const actualEmail = By.xpath("(//*[contains(@class,'text-5-value')][2]) /text()")
        //expect(actualEmail[1]).to.eql(expectedEmail)
    
        });
      
      });