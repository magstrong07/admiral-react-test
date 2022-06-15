import { test, expect } from '@playwright/test';
test.describe('select', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://magstrong07.github.io/admiral-react-test/#/select');
  });
  test('select click options', async ({ page }) => {
    await page.waitForTimeout(200);
    await page.locator('input >> nth=0').click();
    await page.locator('div[role="option"]:has-text("Option three")').click();
    await page.locator('input >> nth=0').click();
    await page.locator('div[role="option"]:has-text("Option five")').click();
    await page.locator('input >> nth=0').click();
    await page.locator('text=Номер Карты /****22 Дополнительный текст').click();
    await page.locator('input >> nth=0').click();
    await page
      .locator(
        '#selectDropdownContainer >> text=Option four long text long text long text long text long text long text long tex',
      )
      .click();
    await page.locator('input >> nth=0').click();
    await page.locator('div[role="option"]:has-text("Option six")').click();
    await page.locator('input >> nth=3').click();
    await page
      .locator(
        '#selectDropdownContainer >> text=Option eight long text long text long text long text long text long text long te',
      )
      .click();

    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
});
