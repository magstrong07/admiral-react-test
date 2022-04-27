import { test, expect } from '@playwright/test';
test.describe('select', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/select');
  });
  test('select', async ({ page }) => {
    await page.click('div[role="button"]:has-text("Placeholder")');
    await page.click('text=Option three');
    await page.click('div[role="button"]:has-text("Option one")');
    await page.click('li[role="option"]:has-text("Option six")');
    await page.click('div[role="button"]:has-text("Номер Карты /****45")');
    await page.click('text=Номер Карты /****35 Дополнительный текст');
    await page.click('text=Option threeOption sixНомер Карты /****35 >> :nth-match(div[role="button"], 4)');
    await page.click('text=Option three long text long text');
    await page.waitForTimeout(350);
    expect(await page.screenshot()).toMatchSnapshot('select_1.png');
  });
});