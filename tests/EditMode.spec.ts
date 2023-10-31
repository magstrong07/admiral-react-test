import { test, expect } from '@playwright/test';
test.describe('edit_mode', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/#/edit_mode_field');
  });

  test('edit_mode_open click_svg', async ({ page }) => {
    await page
      .locator('div')
      .filter({ hasText: /^s, disabled false,bold falseLabeladmin$/ })
      .getByRole('img')
      .click();
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('edit_mode_open click_svg add world', async ({ page }) => {
    await page
      .locator('div')
      .filter({ hasText: /^s, disabled false,bold falseLabeladmin$/ })
      .getByRole('img')
      .click();
    await page.getByLabel('Label').fill('admin test');
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('edit_mode_open click_svg add world and close krest', async ({ page }) => {
    await page
      .locator('div')
      .filter({ hasText: /^s, disabled false,bold falseLabeladmin$/ })
      .getByRole('img')
      .click();
    await page.getByLabel('Label').fill('admin test');
    await page.getByRole('button').nth(1).click();
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });

  test('edit_mode_open click_svg add world and close galka', async ({ page }) => {
    await page
      .locator('div')
      .filter({ hasText: /^s, disabled false,bold falseLabeladmin$/ })
      .getByRole('img')
      .click();
    await page.getByLabel('Label').fill('admin test');
    await page.getByRole('button').first().click();
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
});
test.describe('edit_mode_dark', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/#/edit_mode_field');
    await page.getByLabel('Dark_mode').check();
  });

  test('edit_mode_open click_svg', async ({ page }) => {
    await page
      .locator('div')
      .filter({ hasText: /^s, disabled false,bold falseLabeladmin$/ })
      .getByRole('img')
      .click();
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('edit_mode_open click_svg add world', async ({ page }) => {
    await page
      .locator('div')
      .filter({ hasText: /^s, disabled false,bold falseLabeladmin$/ })
      .getByRole('img')
      .click();
    await page.getByLabel('Label').fill('admin test');
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('edit_mode_open click_svg add world and close krest', async ({ page }) => {
    await page
      .locator('div')
      .filter({ hasText: /^s, disabled false,bold falseLabeladmin$/ })
      .getByRole('img')
      .click();
    await page.getByLabel('Label').fill('admin test');
    await page.getByRole('button').nth(1).click();
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });

  test('edit_mode_open click_svg add world and close galka', async ({ page }) => {
    await page
      .locator('div')
      .filter({ hasText: /^s, disabled false,bold falseLabeladmin$/ })
      .getByRole('img')
      .click();
    await page.getByLabel('Label').fill('admin test');
    await page.getByRole('button').first().click();
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
});
