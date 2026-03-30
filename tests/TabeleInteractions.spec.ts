import { test, expect } from '@playwright/test';
test.describe('table open group', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/table_with_group');
  });

  test('click open 1 group', async ({ page }) => {
    await page.getByRole('button').first().click();
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('click close 2 group', async ({ page }) => {
    await page.getByRole('button').nth(1).click();
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
});

test.describe('table group click dark', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/table_with_group');
    await page.getByLabel('Dark_mode').check();
  });

  test('click open 1 group dark', async ({ page }) => {
    await page.getByRole('button').first().click();
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('click close 2 group dark', async ({ page }) => {
    await page.getByRole('button').nth(1).click();
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
});

test.describe('table open group custom', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/table_with_group_custom');
  });

  test('click open 1 group custom', async ({ page }) => {
    await page.getByRole('button').first().click();
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('click close 2 group custom', async ({ page }) => {
    await page.getByRole('button').nth(1).click();
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
});

test.describe('table group click custom dark ', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/table_with_group_custom');
    await page.getByLabel('Dark_mode').check();
  });

  test('click open 1 group dark custom', async ({ page }) => {
    await page.getByRole('button').first().click();
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('click close 2 group dark custom', async ({ page }) => {
    await page.getByRole('button').nth(1).click();
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
});

test.describe('table drag and droup columns', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/table_drag_column');
  });

  test('table drag and droup columns 1', async ({ page }) => {
    await page.locator('div:text-is("Дата сделки")').first().dragTo(page.locator('div:text-is("Тип сделки")').first());
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('table drag and droup columns 2', async ({ page }) => {
    await page.locator('div:text-is("Дата сделки")').nth(1).dragTo(page.locator('div:text-is("Тип сделки")').nth(1));
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
});

test.describe('table drag and droup columns dark ', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/table_with_group_custom');
    await page.getByLabel('Dark_mode').check();
  });

  test('table drag and droup columns dark 1', async ({ page }) => {
    await page.getByRole('button').first().click();
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('table drag and droup columns dark 2', async ({ page }) => {
    await page.getByRole('button').nth(1).click();
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
});

test.describe('table virtual scroll', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/table_with_percents_scroll');
  });

  test('table virtual scroll 1', async ({ page }) => {
    await page.locator('div:text-is("Scroll")').nth(0).scrollIntoViewIfNeeded();
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('table virtual scroll 2', async ({ page }) => {
    await page.locator('div:text-is("Scroll")').nth(1).scrollIntoViewIfNeeded();
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
});

test.describe('table virtual scroll dark ', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/table_with_percents_scroll');
    await page.getByLabel('Dark_mode').check();
  });

  test('table virtual scroll dark 1', async ({ page }) => {
    await page.locator('div:text-is("Scroll")').nth(0).scrollIntoViewIfNeeded();
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('table virtual scroll dark 2', async ({ page }) => {
    await page.locator('div:text-is("Scroll")').nth(1).scrollIntoViewIfNeeded();
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
});
