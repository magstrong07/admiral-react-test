import { test, expect } from '@playwright/test';

test('multiselect click', async ({ page }) => {
  await page.goto('http://localhost:3000/#/multiselect');

  await page.locator('select >> nth=0').click({ force: true });
  await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
});

test('multiselect options chips', async ({ page }) => {
  await page.goto('http://localhost:3000/#/multiselect');

  await page.locator('select >> nth=0').selectOption(['big', '4', '5']);

  await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
});
