const { Builder, By, Key, until } = require('selenium-webdriver');
const percySnapshot = require('@percy/selenium-webdriver');

(async function() {
  var BROWSERSTACK_USERNAME = "BROWSERSTACK_USERNAME"
  var BROWSERSTACK_ACCESS_KEY = "BROWSERSTACK_ACCESS_KEY"

  var capabilities = {
    'bstack:options' : {
      "os" : "OS X",
      "osVersion" : "Monterey",
      "buildName" : "Case related tests",
      "sessionName" : "checking percy snaps",
      "local" : "false",
      "debug" : "true",
      "networkLogs" : "true",
      "seleniumVersion" : "4.0.0",
      "userName" : BROWSERSTACK_USERNAME,
      "accessKey" : BROWSERSTACK_ACCESS_KEY,
    }, 
    "browserName" : "Chrome",
    "browserVersion" : "100.0",
  }    

  let driver = new Builder()
    .usingServer(`http://${BROWSERSTACK_USERNAME}:${BROWSERSTACK_ACCESS_KEY}@hub-cloud.browserstack.com/wd/hub`)
    .withCapabilities(capabilities)
    .build();

  try {
    
    await driver.get("https://www.google.com");
    await driver.sleep(5000);
    await driver.findElement(By.xpath('(//input[@name="btnI"])[2]')).click();
    await driver.sleep(5000);
    await percySnapshot(driver, 'Feeling lucky page');

  } catch (error) {
    
    console.log(error);
    await driver.quit()
  
  } finally {
    
    await driver.quit()
    
  }
})();
