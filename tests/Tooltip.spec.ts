import { test, expect } from '@playwright/test';
test.describe('Tooltip', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/#/tooltip');
  });

  test('tooltip click', async ({ page }) => {
    await page.getByLabel('Delete').first().click();
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });

  test('tooltip hover', async ({ page }) => {
    await page.getByLabel('Delete').first().hover();
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('tooltip key Tab', async ({ page }) => {
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('tooltip mouser leave', async ({ page }) => {
    await page.getByLabel('Delete').first().hover();
    await page.getByLabel('Dark_mode').hover();
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('tooltip click Dark', async ({ page }) => {
    await page.getByLabel('Dark_mode').check();
    await page.getByLabel('Delete').first().click();
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('tooltip hover Dark', async ({ page }) => {
    await page.getByLabel('Dark_mode').check();
    await page.getByLabel('Delete').first().hover();
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('tooltip key Tab Dark', async ({ page }) => {
    await page.getByLabel('Dark_mode').check();
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('tooltip mouser leave Dark', async ({ page }) => {
    await page.getByLabel('Dark_mode').check();
    await page.getByLabel('Delete').first().hover();
    await page.getByLabel('Dark_mode').hover();
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
});
