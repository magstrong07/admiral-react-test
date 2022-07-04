import { test, expect } from '@playwright/test';
test('numbers111', async ({ page }) => {
  await page.goto('https://magstrong07.github.io/admiral-react-test/#/number_input');
  await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
});
