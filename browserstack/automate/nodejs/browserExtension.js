const {Builder, By, Key, until} = require('selenium-webdriver');
var fs = require('fs');

(async () => {

  var BROWSERSTACK_USERNAME = "BROWSERSTACK_USERNAME"
  var BROWSERSTACK_ACCESS_KEY = "BROWSERSTACK_ACCESS_KEY"

  //using CRX file
  let file_path = 'web_extension.crx';
  let buff = new Buffer.from(fs.readFileSync(file_path));
  let base64data = buff.toString('base64');
  
  var capabilities = {
    "os" : "OS X",
    "os_version" : "Monterey",
    "browserName" : "Chrome",
    "browser_version" : "latest",
    "build" : "Case related tests",
    "name" : "install chromeExtension",
    "browserstack.local" : "false",
    "browserstack.debug" : "true",
    "browserstack.networkLogs" : "true",
    "browserstack.selenium_version" : "4.0.0",
    "browserstack.user" : BROWSERSTACK_USERNAME,
    "browserstack.key" : BROWSERSTACK_ACCESS_KEY,
    'chromeOptions': {
      'args' : [ `--load-extension=${base64data}` ]
      }
  }

  let driver = new Builder()
    .usingServer(`http://${BROWSERSTACK_USERNAME}:${BROWSERSTACK_ACCESS_KEY}@hub-cloud.browserstack.com/wd/hub`)
    .withCapabilities(capabilities)
    .build();
  try {
    await driver.get("chrome://extensions/");
  } finally {
    await driver.quit();
  }
})();
