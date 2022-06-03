import { test, expect } from '@playwright/test';
test.describe('Chips', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://magstrong07.github.io/admiral-react-test/#/chips');
  });
  test('Chips close', async ({ page }) => {
    for (let i = 0; i <=15; )
    await page.locator('[data-test=testComponent2] >>svg >> nth=0').click();
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('chips_close.png');
  });
  test('Chips select', async ({ page }) => {
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
});
