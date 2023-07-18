import { test } from '@playwright/test';

test('calendar click', async ({ page }) => {
  await page.goto('http://localhost:3000/#/calendar');

  await page.locator('[data-test-id="calendar1"] svg').nth(1).click();
});
