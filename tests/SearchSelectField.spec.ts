import { test, expect } from '@playwright/test';
test.describe('search select field', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://magstrong07.github.io/admiral-react-test/#/search_select_field');
  });
  test('search select field click', async ({ page }) => {
    await page.locator('input >> nth=0').click();
    await page.locator('#selectDropdownContainer div:has-text("teeext 1")').first().click();
    await page.locator('input >> nth=1').click();
    await page.locator('div:has-text("Текст 1Доооп Текст 1")').nth(2).click();
    await page.locator('input >> nth=4').click();
    await page.locator('#selectDropdownContainer div:has-text("texttt 6")').first().click();
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('search select field input text', async ({ page }) => {
    await page.locator('input >> nth=0').click();
    await page.keyboard.type('teeext');
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('search select field input text 2', async ({ page }) => {
    await page.locator('input >> nth=1').click();
    await page.keyboard.type('Доп');
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
});
