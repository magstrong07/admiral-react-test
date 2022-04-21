import { test, expect } from '@playwright/test';
test.describe('Checkbox Composite group', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/checkbox_composite_group');
  });
  test('Checkbox Composite group click 3', async ({ page }) => {
    await page.check('input[name="Москва"]');
    await page.check('input[name="Воронеж"]');
    await page.check('input[name="Самара"]');
    await page.waitForTimeout(250);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('checkbox_composite_group_click_3.png');
  });
  test('Checkbox Composite group click 4', async ({ page }) => {
    await page.check('input[name="Москва"]');
    await page.check('input[name="Воронеж"]');
    await page.check('input[name="Самара"]');
    await page.check('input[name="Омск"]');
    await page.waitForTimeout(250);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('checkbox_composite_group_click_4.png');
  });
  test('Checkbox Composite group click uncheck', async ({ page }) => {
    await page.check('input[name="Москва"]');
    await page.check('input[name="Воронеж"]');
    await page.check('input[name="Самара"]');
    await page.check('input[name="Омск"]');
    await page.uncheck('input[type="checkbox"]');
    await page.waitForTimeout(250);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('checkbox_composite_group_uncheck.png');
  });
});
