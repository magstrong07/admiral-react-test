import { test, expect } from '@playwright/test';
test.describe('Checkbox Composite group', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://magstrong07.github.io/admiral-react-test/#/checkbox_composite_group');
  });
  test('Checkbox Composite group click 3', async ({ page }) => {
    await page.check('input[name="Москва"]');
    await page.check('input[name="Воронеж"]');
    await page.check('input[name="Самара"]');
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('Checkbox Composite group click 4', async ({ page }) => {
    await page.check('input[name="Москва"]');
    await page.check('input[name="Воронеж"]');
    await page.check('input[name="Самара"]');
    await page.check('input[name="Омск"]');
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('Checkbox Composite group click uncheck', async ({ page }) => {
    await page.check('input[name="Москва"]');
    await page.check('input[name="Воронеж"]');
    await page.check('input[name="Самара"]');
    await page.check('input[name="Омск"]');
    await page.uncheck('input[type="checkbox"]');
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });

  /*==============Dark mode=================*/
  test('Checkbox Composite group click 3 Dark', async ({ page }) => {
    await page.locator('label[role="switch"] span').click();
    await page.check('input[name="Москва"]');
    await page.check('input[name="Воронеж"]');
    await page.check('input[name="Самара"]');
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('Checkbox Composite group click 4 Dark', async ({ page }) => {
    await page.locator('label[role="switch"] span').click();
    await page.check('input[name="Москва"]');
    await page.check('input[name="Воронеж"]');
    await page.check('input[name="Самара"]');
    await page.check('input[name="Омск"]');
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('Checkbox Composite group click uncheck Dark', async ({ page }) => {
    await page.locator('label[role="switch"] span').click();
    await page.check('input[name="Москва"]');
    await page.check('input[name="Воронеж"]');
    await page.check('input[name="Самара"]');
    await page.check('input[name="Омск"]');
    await page.uncheck('input[type="checkbox"]');
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
});
