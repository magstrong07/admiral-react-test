import { test, expect } from '@playwright/test';
test.describe('Breadcrumbs cliks', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/#/breadcrumbs');
  });
  test('breadcrumbs hover link', async ({ page }) => {
    await page.locator('a').filter({ hasText: 'page 1' }).getByRole('link').first().hover();
    // await page.getByRole('link').first().hover();
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('breadcrumbs hover button', async ({ page }) => {
    await page.getByRole('button').first().hover();
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('breadcrumbs click button', async ({ page }) => {
    await page.getByRole('button').first().click();
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('breadcrumbs hover last active', async ({ page }) => {
    await page.locator('a').filter({ hasText: 'current page' }).getByRole('link').hover();
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
});

test.describe('Breadcrumbs cliks Dark', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/#/breadcrumbs');
    await page.getByLabel('Dark_mode').check();
  });
  test('breadcrumbs hover link dark', async ({ page }) => {
    await page.locator('a').filter({ hasText: 'page 1' }).getByRole('link').first().hover();
    // await page.getByRole('link').first().hover();
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('breadcrumbs hover button dark', async ({ page }) => {
    await page.getByRole('button').first().hover();
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('breadcrumbs click button dark', async ({ page }) => {
    await page.getByRole('button').first().click();
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('breadcrumbs hover last active dark', async ({ page }) => {
    await page.locator('a').filter({ hasText: 'current page' }).getByRole('link').hover();
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
});
