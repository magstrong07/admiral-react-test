import { test, expect } from '@playwright/test';
test.describe('Checkbox Composite group', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/#/checkbox_composite_group');
  });
  test('Checkbox Composite group click 3', async ({ page }) => {
    await page.locator('input[name="Москва"]').nth(2).check();
    await page.locator('input[name="Самара"]').nth(2).check();
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('Checkbox Composite group click 4', async ({ page }) => {
    await page.locator('input[name="Москва"]').nth(2).check();
    await page.locator('input[name="Воронеж"]').nth(2).check();
    await page.locator('input[name="Самара"]').nth(2).check();
    await page.locator('input[name="Омск"]').nth(2).check();
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('Checkbox Composite group click uncheck', async ({ page }) => {
    await page.locator('input[name="Москва"]').nth(2).check();
    await page.locator('input[name="Воронеж"]').nth(2).check();
    await page.locator('input[name="Самара"]').nth(2).check();
    await page.locator('input[name="Омск"]').nth(2).check();
    // await page.locator('text=Города:').nth(2).uncheck();
    await page.getByLabel('Города:').nth(2).uncheck();
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });

  /*==============Dark mode=================*/
  test('Checkbox Composite group click 3 Dark', async ({ page }) => {
    await page.getByLabel('Dark_mode').check();
    await page.locator('input[name="Москва"]').nth(2).check();
    await page.locator('input[name="Воронеж"]').nth(2).check();
    await page.locator('input[name="Самара"]').nth(2).check();
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('Checkbox Composite group click 4 Dark', async ({ page }) => {
    await page.getByLabel('Dark_mode').check();
    await page.locator('input[name="Москва"]').nth(2).check();
    await page.locator('input[name="Воронеж"]').nth(2).check();
    await page.locator('input[name="Самара"]').nth(2).check();
    await page.locator('input[name="Омск"]').nth(2).check();
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('Checkbox Composite group click uncheck Dark', async ({ page }) => {
    await page.getByLabel('Dark_mode').check();
    await page.locator('input[name="Москва"]').nth(2).check();
    await page.locator('input[name="Воронеж"]').nth(2).check();
    await page.locator('input[name="Самара"]').nth(2).check();
    await page.locator('input[name="Омск"]').nth(2).check();
    await page.getByLabel('Города:').nth(2).uncheck();
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
});
