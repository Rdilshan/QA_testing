const { Builder, By, until } = require('selenium-webdriver');

describe('Login Test Suite', () => {
  let driver;

  beforeAll(async () => {
    driver = await new Builder().forBrowser('firefox').build();
  });

  afterAll(async () => {
    await driver.quit();
    
  });

  test('should login successfully and redirect to the correct URL', async () => {
    await driver.get('http://localhost:5173/LoginReg');

    await driver.findElement(By.xpath('/html/body/div/div[2]/div/div/div/div/div/div[1]/div/form/div[1]/input')).sendKeys("rd118755@gmail.com");
    await driver.findElement(By.xpath('/html/body/div/div[2]/div/div/div/div/div/div[1]/div/form/div[2]/input')).sendKeys("12qwaszx");
    await driver.findElement(By.xpath('/html/body/div/div[2]/div/div/div/div/div/div[1]/div/form/div[4]/button')).click();

  },2000);
});
