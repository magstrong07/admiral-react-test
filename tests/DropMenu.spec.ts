import { test, expect } from '@playwright/test';
test.describe('drop menu', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/#/drop_menu');
  });
  test('drop menu click s', async ({ page }) => {
    await page.locator(`text=Нажми >> nth=0`).click();
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('drop menu click m', async ({ page }) => {
    await page.locator(`text=Нажми >> nth=2`).click();
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('drop menu click l', async ({ page }) => {
    await page.locator(`text=Нажми >> nth=4`).click();
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });

  /*==============Dark mode=================*/

  test('drop menu click s dark', async ({ page }) => {
    await page.getByLabel('Dark_mode').check();
    await page.locator(`text=Нажми >> nth=0`).click();
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('drop menu click m dark', async ({ page }) => {
    await page.getByLabel('Dark_mode').check();
    await page.locator(`text=Нажми >> nth=2`).click();
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('drop menu click l dark', async ({ page }) => {
    await page.getByLabel('Dark_mode').check();
    await page.locator(`text=Нажми >> nth=4`).click();
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
});
