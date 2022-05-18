import { test, expect } from '@playwright/test';
test.describe('Menu Button', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://magstrong07.github.io/admiral-react-test/#/menu_button');
  });
  test('menu button open', async ({ page }) => {
    await page.click('button:has-text("Test")');
    await page.waitForTimeout(350);
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('menu button select', async ({ page }) => {
    await page.click('button:has-text("Test")');
    await page.click('text=Option four');
    await page.waitForTimeout(350);
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
});
