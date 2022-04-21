import { test, expect } from '@playwright/test';
test.describe('avatar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/avatar');
  });
  test('avatar hover', async ({ page }) => {
    await page.hover('button:nth-child(6)');
    await page.waitForTimeout(250);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('avatar_hover.png');
  });
});
