import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Go to http://localhost:3000/#/multiselect
  await page.goto('http://localhost:3000/#/multiselect');

  // Click .sc-dWINGa >> nth=0
  await page.locator('data-test-id=multiselect >> nth=0').click({ force: true });
  await page.waitForTimeout(3000);
  await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });

  // Check div:nth-child(2) > .sc-lbxAil > .sc-jfmDQi
});
