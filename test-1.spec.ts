import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/#/search_select_field');
  await page.locator('.sc-jYvNne').first().click();
  await page.locator('div').filter({ hasText: /^text 3$/ }).click();
});