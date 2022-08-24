import { test, expect } from '@playwright/test';

test('multiselect click', async ({ page }) => {
  await page.goto('https://magstrong07.github.io/admiral-react-test/#/multiselect');

  await page.locator('data-test-id=multiselect >> nth=0').click({ force: true });
  await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });

});
