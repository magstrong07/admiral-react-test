import { test, expect } from '@playwright/test';
test.describe('avatar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/#/avatar');
  });
  test('avatar hover', async ({ page }) => {
    await page.hover('button:nth-child(6)');
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('avatar hover Dark', async ({ page }) => {
    await page.getByLabel('Dark_mode').check();
    await page.hover('button:nth-child(6)');
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
});
