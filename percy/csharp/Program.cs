// Currently Percy does not support C# hence we would using a workaround
// In order to execute a Percy with BrowserStack test via C# we are using percy_csharp_selenium nuget
// Download percy_csharp_selenium from https://www.nuget.org/packages/percy-csharp-selenium
// Once downloaded you can manually export the nuget in VS

using System;
using System.Collections.Generic;
using System.Threading;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Edge;
using OpenQA.Selenium.Firefox;
using OpenQA.Selenium.Remote;
using OpenQA.Selenium.Safari;
using percy_csharp_selenium;

namespace percyWithBrowserStack
{
    public class Program
    {
        public static void Main(string[] args)
        {
            IWebDriver driver;
            Percy percy;
            percy = new Percy();

            ChromeOptions capability = new ChromeOptions();
            capability.AddAdditionalCapability("os", "OS X", true);
            capability.AddAdditionalCapability("os_version", "Monterey", true);
            capability.AddAdditionalCapability("browser", "Chrome", true);
            capability.AddAdditionalCapability("browser_version", "100.0", true);
            capability.AddAdditionalCapability("build", "Case related tests", true);
            capability.AddAdditionalCapability("name", "checking percy with browserstack via c-sharp", true);
            capability.AddAdditionalCapability("browserstack.local", "false", true);
            capability.AddAdditionalCapability("browserstack.selenium_version", "4.0.0", true);
            capability.AddAdditionalCapability("browserstack.geoLocation", "FR", true);
            capability.AddAdditionalCapability("browserstack.user", "BROWSERSTACK_USERNAME", true);
            capability.AddAdditionalCapability("browserstack.key", "BROWSERSTACK_ACCESS_KEY", true);

            driver = new RemoteWebDriver(
              new Uri("https://BROWSERSTACK_USERNAME:BROWSERSTACK_ACCESS_KEY@hub-cloud.browserstack.com/wd/hub"), capability
            );
            driver.Navigate().GoToUrl("https://www.google.com");
            Thread.Sleep(4000);
            percy.Snapshot(driver, "Before accepting", null);
            driver.FindElement(By.Id("L2AGLb")).Click();
            percy.Snapshot(driver, "After accepting", null);
            driver.Close();
        }

    }
}
    