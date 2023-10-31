import { test, expect } from '@playwright/test';

test('table checkbox check', async ({ page }) => {
  await page.goto('http://localhost:3000/#/table_with_checkbox');

  await page.locator('.tr').filter({ hasText: /18/ }).getByRole('checkbox').nth(2).check();
  await page.waitForTimeout(250);
  await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
});

test('table checkbox check dark', async ({ page }) => {
  await page.goto('http://localhost:3000/#/table_with_checkbox');
  await page.getByLabel('Dark_mode').check();
  await page.locator('.tr').filter({ hasText: /18/ }).getByRole('checkbox').nth(2).check();
  await page.waitForTimeout(250);
  await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
});
