import { test, expect } from '@playwright/test';
test.describe('accordion', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/#/accordion');
  });

  test('Accordion click1', async ({ page }) => {
    await page.click('button[role="button"]:has-text("Первый пункт")');
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });

  test('Accordion click2', async ({ page }) => {
    await page.click('button[role="button"]:has-text("Второй пункт")');
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('Accordion click2 radio', async ({ page }) => {
    await page.click('button[role="button"]:has-text("Второй пункт")');
    await page.click('text=Second option');
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('Accordion click2 option 5', async ({ page }) => {
    await page.click('button[role="button"]:has-text("Второй пункт")');
    await page.locator('[placeholder="Placeholder"]').click();
    await page
      .locator('div')
      .filter({ hasText: /^text 4$/ })
      .click();
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('Accordion click3', async ({ page }) => {
    await page.click('button[role="button"]:has-text("Третий пункт")');
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });

  /*==============Dark mode=================*/

  test('Accordion click1 Dark', async ({ page }) => {
    await page.getByLabel('Dark_mode').check();
    await page.click('button[role="button"]:has-text("Первый пункт")');
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('Accordion click2 Dark', async ({ page }) => {
    await page.getByLabel('Dark_mode').check();
    await page.click('button[role="button"]:has-text("Второй пункт")');
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('Accordion click2 radio Dark', async ({ page }) => {
    await page.getByLabel('Dark_mode').check();
    await page.click('button[role="button"]:has-text("Второй пункт")');
    await page.click('text=Second option');
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('Accordion click2 option 5 Dark', async ({ page }) => {
    await page.getByLabel('Dark_mode').check();
    await page.click('button[role="button"]:has-text("Второй пункт")');
    await page.locator('[placeholder="Placeholder"]').click();
    await page
      .locator('div')
      .filter({ hasText: /^text 4$/ })
      .click();
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('Accordion click3 Dark', async ({ page }) => {
    await page.getByLabel('Dark_mode').check();
    await page.click('button[role="button"]:has-text("Третий пункт")');
    await page.waitForTimeout(250);
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
});
