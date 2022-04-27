import { test, expect } from '@playwright/test';
test.describe('avatarGroup', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/avatar_group');
  });
  test('avatarGroup hover', async ({ page }) => {
    await page.hover('[id="6"]');
    await page.waitForTimeout(250);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('avatar_group_hover.png');
  });
});