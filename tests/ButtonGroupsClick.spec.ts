import { test, expect } from '@playwright/test';
test.describe('Button Group', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://magstrong07.github.io/admiral-react-test/#/button_group');
  });
  test('Button Group click ', async ({ page }) => {
    await page.click('text=Default button');
    await page.click('text=Default button6');
    await page.click('#app div div:nth-child(2) div .sc-cTAqQK.kVTxIZ');
    await page.click('#app div div:nth-child(2) div:nth-child(3) .sc-cTAqQK.kVTxIZ');
    await page.click('.sc-jObWnj.bUlriZ .sc-cTAqQK.kVTxIZ');
    await page.click('div:nth-child(3) div:nth-child(3) .sc-cTAqQK.kVTxIZ');
    await page.click('div:nth-child(4) div .sc-cTAqQK.kVTxIZ');
    await page.click('div:nth-child(4) div:nth-child(3) .sc-cTAqQK.kVTxIZ');
    await page.click('.sc-jObWnj.biTkWb .sc-cTAqQK.kVTxIZ');
    await page.click('div:nth-child(5) div:nth-child(3) .sc-cTAqQK.kVTxIZ');
    await page.click('div:nth-child(6) div .sc-cTAqQK.kVTxIZ');
    await page.click('div:nth-child(6) div:nth-child(3) .sc-cTAqQK.kVTxIZ');
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
});
