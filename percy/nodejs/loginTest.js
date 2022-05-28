const { Builder, By, Key, until } = require('selenium-webdriver');
const percySnapshot = require('@percy/selenium-webdriver');

(async function() {
  let driver = await new Builder().forBrowser('firefox').build();

  try {
    
    await driver.get('https://the-internet.herokuapp.com/login');
    await driver.sleep(5000);
    await percySnapshot(driver, 'Page loaded');
    await driver.findElement(By.id('username')).sendKeys('tomsmith');
    await driver.findElement(By.id('password')).sendKeys('SuperSecretPassword!');
    await driver.findElement(By.xpath("//*[@id='login']/button")).click();
    await driver.sleep(5000);
    await percySnapshot(driver, 'Auth attempted');

  } catch (error) {
    
    console.log(error);
    await driver.quit()
  
  } finally {
  
    await driver.quit()
    
  }
})();
