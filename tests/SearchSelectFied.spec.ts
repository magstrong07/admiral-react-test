import { test, expect } from '@playwright/test';
test.describe('search select field', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/#/search_select_field');
  });
  test('search select field click', async ({ page }) => {
    await page.locator('select').first().selectOption('text 3');
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('search select field input text', async ({ page }) => {
    await page.locator('select').nth(1).selectOption('teeext 1');
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('search select field input text 2', async ({ page }) => {
    await page.locator('input >> nth=2').click();
    // await page.keyboard.type('Доп');
    await page.locator('input >> nth=2').fill('Доп');

    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });

  /*==============Dark mode=================*/

  test('search select field click Dark', async ({ page }) => {
    await page.getByLabel('Dark_mode').check();

    await page.locator('input >> nth=1').click();
    await page.locator('div:has-text("teeext 1")').first().click();
    await page.locator('input >> nth=2').click();
    await page.locator('div:has-text("Текст 1Доооп Текст 1")').nth(2).click();
    await page.locator('input >> nth=5').click();
    await page.locator('div:has-text("texttt 6")').first().click();
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
});
