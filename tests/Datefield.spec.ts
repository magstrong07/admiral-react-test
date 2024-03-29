import { test, expect } from '@playwright/test';
test.describe('Date field', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/#/date_field');
  });
  test('date field input text', async ({ page }) => {
    await page.click('input>>nth=1');
    await page.press('input>>nth=1', 'ArrowLeft');
    await page.press('input>>nth=1', 'ArrowLeft');
    await page.press('input>>nth=1', 'ArrowLeft');
    await page.press('input>>nth=1', 'ArrowLeft');
    await page.press('input>>nth=1', 'ArrowLeft');
    await page.press('input>>nth=1', 'ArrowLeft');
    await page.press('input>>nth=1', 'ArrowLeft');
    await page.press('input>>nth=1', 'ArrowLeft');
    await page.press('input>>nth=1', 'ArrowLeft');
    await page.press('input>>nth=1', 'ArrowLeft');
    await page.fill('input>>nth=1', '01.05.2021');
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('date field calendar', async ({ page }) => {
    await page.click('text=Labelsuccesserrorvalue >> :nth-match(svg, 2)');

    await page.click('text=10');
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  /*==============Dark mode=================*/

  test('date field input text Dark', async ({ page }) => {
    await page.getByLabel('Dark_mode').check();

    await page.click('input>>nth=1');
    await page.press('input>>nth=1', 'ArrowLeft');
    await page.press('input>>nth=1', 'ArrowLeft');
    await page.press('input>>nth=1', 'ArrowLeft');
    await page.press('input>>nth=1', 'ArrowLeft');
    await page.press('input>>nth=1', 'ArrowLeft');
    await page.press('input>>nth=1', 'ArrowLeft');
    await page.press('input>>nth=1', 'ArrowLeft');
    await page.press('input>>nth=1', 'ArrowLeft');
    await page.press('input>>nth=1', 'ArrowLeft');
    await page.press('input>>nth=1', 'ArrowLeft');
    await page.fill('input>>nth=1', '01.05.2021');
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('date field calendar Dark', async ({ page }) => {
    await page.getByLabel('Dark_mode').check();

    await page.click('text=Labelsuccesserrorvalue >> :nth-match(svg, 2)');

    await page.click('text=10');
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
});
