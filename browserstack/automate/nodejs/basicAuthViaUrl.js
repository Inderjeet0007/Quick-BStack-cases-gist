const {Builder, By, Key, until} = require('selenium-webdriver');

(async () => {
  var BROWSERSTACK_USERNAME = "BROWSERSTACK_USERNAME"
  var BROWSERSTACK_ACCESS_KEY = "BROWSERSTACK_ACCESS_KEY"

  var capabilities = {
    "os" : "Windows",
    "os_version" : "8.1",
    "browserName" : "Opera",
    "browser_version" : "12.16",
    "build" : "Case related tests",
    "name" : "auth passing email and pass via URL",
    "browserstack.local" : "true",
    "browserstack.debug" : "true",
    "browserstack.networkLogs" : "true",
    "browserstack.user" : BROWSERSTACK_USERNAME,
    "browserstack.key" : BROWSERSTACK_ACCESS_KEY
  }

  let driver = new Builder()
    .usingServer(`http://${BROWSERSTACK_USERNAME}:${BROWSERSTACK_ACCESS_KEY}@hub-cloud.browserstack.com/wd/hub`)
    .withCapabilities(capabilities)
    .build();
  try {
    // when trying to pass email id (run authServer.js first)....
    await driver.get('http://admin%40example.com:password@localhost:3000/');
    
  } finally {
    await driver.quit();
  }
})();
