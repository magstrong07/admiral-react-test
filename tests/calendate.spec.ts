import { test, expect } from '@playwright/test';

test('calendar click', async ({ page }) => {
  // Go to http://localhost:3000/#/calendar
  await page.goto('http://localhost:3000/#/calendar');

  // Click [data-test-id="calendar1"] svg >> nth=1
  await page.locator('[data-test-id="calendar1"] svg').nth(1).click();
  await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
});
