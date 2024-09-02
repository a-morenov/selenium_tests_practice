const { Builder } = require('selenium-webdriver');
const { takeScreenshot } = require('./common/helpers')

exports.mochaHooks = {
  beforeEach: async function () {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.manage().setTimeouts({ implicit: 10000 })
  },

  afterEach: async function () {
   // if (this.currentText.state == "failed") {
   //   takeScreenshot(this.currentText.title)
   // }
   await driver.quit();
  },
};
