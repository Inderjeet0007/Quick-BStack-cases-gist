// @ts-check
const { webkit, test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('https://webcamtests.com/check');
});


test.describe('New Todo', () => {
  test('should allow me to add todo items', async ({ page }) => {
    
    await page.waitForTimeout(3000);
    const element1 = await page.$('#webcam-launcher');
    await element1.click();
    await page.waitForTimeout(5000);

    const browser = await webkit.launch();
    const userContext = await browser.newContext();
    const page1 = await userContext.newPage();
    await page1.goto('https://webcamtests.com/check');
    await page1.waitForTimeout(3000);
    const element2 = await page1.$('#webcam-launcher');
    await element2.click();
    await page1.waitForTimeout(5000);

  });

});