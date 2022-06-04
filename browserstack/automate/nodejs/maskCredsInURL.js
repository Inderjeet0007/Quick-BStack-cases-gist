const {Builder, By, Key, until} = require('selenium-webdriver');

(async () => {
  var BROWSERSTACK_USERNAME = "BROWSERSTACK_USERNAME"
  var BROWSERSTACK_ACCESS_KEY = "BROWSERSTACK_ACCESS_KEY"
  
  var capabilities = {
    "os" : "Windows",
    "os_version" : "10",
    "browserName" : "Chrome",
    "browser_version" : "latest",
    "build" : "Case related tests",
    "name" : "basic auth",
    "browserstack.local" : "false",
    "browserstack.debug" : "true",
    "browserstack.networkLogs" : "true",
    "browserstack.maskBasicAuth" : "true",
    "browserstack.selelnium.version": "4.0.0",
    "browserstack.user" : BROWSERSTACK_USERNAME,
    "browserstack.key" : BROWSERSTACK_ACCESS_KEY
  }

  let driver = new Builder()
    .usingServer(`http://${BROWSERSTACK_USERNAME}:${BROWSERSTACK_ACCESS_KEY}@hub-cloud.browserstack.com/wd/hub`)
    .withCapabilities(capabilities)
    .build();
  try {
    await driver.get('http://admin:admin@the-internet.herokuapp.com/basic_auth');
    
  } finally {
    await driver.quit();
  }
})();
