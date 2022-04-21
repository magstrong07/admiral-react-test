import { test, expect } from '@playwright/test';
test.describe('modal', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/modal');
  });
  test('modal click 1 button', async ({ page }) => {
    await page.click('button:has-text("Open modal with 1 button")');
    await page.waitForTimeout(250);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('modal_click_1.png');
    await page.click('button:has-text("Yes button")');
  });
  test('modal click  without buttons ', async ({ page }) => {
    await page.click('button:has-text("Open modal without buttons")');
    await page.waitForTimeout(250);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('modal_click_2.png');
    await page.click('[aria-label="Закрыть модальное окно"]');
  });
  test('modal click with scrollable content', async ({ page }) => {
    await page.click('button:has-text("Open modal with scrollable content")');
    await page.waitForTimeout(250);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('modal_click_with_scroll.png');
    await page.click('button:has-text("Yes button")');
  });
  test('modal click with custom content', async ({ page }) => {
    await page.click('button:has-text("Open modal with custom content")');
    await page.waitForTimeout(250);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('modal_click_with_custom.png');
    await page.click('button:has-text("First button")');
  });
});
