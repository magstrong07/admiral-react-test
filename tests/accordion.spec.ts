import { test, expect } from '@playwright/test';
test.describe('accordion', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://magstrong07.github.io/admiral-react-test/#/accordion');
  });
  test('Accordion click1', async ({ page }) => {
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
    await page.waitForTimeout(250);

    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('Accordion click2', async ({ page }) => {
    await page.click('button[role="button"]:has-text("Второй пункт")');
    await page.waitForTimeout(250);

    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });  });
  test('Accordion click2 radio', async ({ page }) => {
    await page.click('button[role="button"]:has-text("Второй пункт")');
    await page.waitForTimeout(250);
    await page.click('text=Second option');
    await page.waitForTimeout(250);

    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('Accordion click2 option 5', async ({ page }) => {
    await page.click('button[role="button"]:has-text("Второй пункт")');
    await page.waitForTimeout(250);
    await page.click('div[role="button"]');
    await page.waitForTimeout(250);
    await page.click('text=Option five');
    await page.waitForTimeout(300);

    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('Accordion click3', async ({ page }) => {
    await page.click('button[role="button"]:has-text("Третий пункт")');
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
});
