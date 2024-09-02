const fsp = require("fs").promises
const { By } = require("selenium-webdriver");

async function takeScreenshot(fileName="failedTest"){
    const image = await driver.takeScreenshot();
    await fsp.writeFile(`${fileName}.png`, image, )
  }

  const currentPage = By.css("span[class*='current']")

  module.exports = { takeScreenshot }