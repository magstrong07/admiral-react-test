import { test, expect } from '@playwright/test';
test.describe('Breadcrumbs', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/breadcrumbs');
  });
  test('breadcrumbs click dots', async ({ page }) => {
    await page.click('[aria-label=""]');
    await page.waitForTimeout(250);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('breadcrumbs_click_dots.png');
  });
});
