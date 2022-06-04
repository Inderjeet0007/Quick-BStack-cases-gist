import os
import time
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

options = webdriver.ChromeOptions()

mobile_emulation = {
    "deviceMetrics": {"width": 360, "height": 640, "pixelRatio": 3.0},
 
    "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"
}

options.add_experimental_option('mobileEmulation', mobile_emulation)

desired_cap = {
    "os" : "Windows",
    "os_version" : "10",
    "browser" : "Chrome",
    "browser_version" : "100.0",
    "name" : "mobile emulator via browser", 
    "build" : "Case related tests"
}

desired_cap.update(options.to_capabilities())

driver = webdriver.Remote(
    command_executor='http://BROWSERSTACK_USERNAME:BROWSERSTACK_ACCESS_KEY@hub-cloud.browserstack.com/wd/hub',
    desired_capabilities=desired_cap
)

driver.get("https://www.python.org")

time.sleep(5)
elem = driver.find_element_by_name("q")
time.sleep(5)
elem.send_keys("getting started with python")
time.sleep(5)
elem.send_keys(Keys.RETURN)

driver.close()