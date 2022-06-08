import { test, expect } from '@playwright/test';
test.describe('select', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/#/select');
  });
  test('select', async ({ page }) => {
    await page.waitForTimeout(200);
    await page.locator('select >> nth=0').click();
    await page.locator('text=Option three').click();

    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
});
