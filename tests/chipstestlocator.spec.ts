import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  // Go to https://magstrong07.github.io/admiral-react-test/#/chips
  await page.goto('https://magstrong07.github.io/admiral-react-test/#/chips');
  // Click .sc-dFdIVH >> nth=0
  await page.locator('.sc-dFdIVH').first().click();
});
