import { test, expect } from '@playwright/test';
test.describe('Breadcrumbs', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://magstrong07.github.io/admiral-react-test/#/breadcrumbs');
  });
  test('breadcrumbs click dots', async ({ page }) => {
    await page.click('[aria-label=""]');
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
});
