const { Builder, Browser, By, Key, until } = require('selenium-webdriver')
const assert = require('assert');

;(async function example() {
  let driver = await new Builder().forBrowser(Browser.FIREFOX).build()
  try {
    await driver.get('http://localhost:5173/')

    const value = await driver.findElement(By.xpath('//*[@id="aboutUs-area"]/div/div/div[2]/div/h3')).getText();
    assert.strictEqual(value, "WE ARE VISIONARY", "The text does not match the expected value.");
    console.log("Test passed");

  } finally {
    await driver.quit()
  }
})()