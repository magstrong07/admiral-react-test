import { test, expect } from '@playwright/test';
test.describe('accordion', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/accordion');
  });
  test('Accordion click1', async ({ page }) => {
    await page.click('button[role="button"]:has-text("Первый пункт")');
    await page.waitForTimeout(250);

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('1пункт_аккордион.png');
  });
  test('Accordion click2', async ({ page }) => {
    await page.click('button[role="button"]:has-text("Второй пункт")');
    await page.waitForTimeout(250);

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('2пункт_аккордион.png');
  });
  test('Accordion click2 radio', async ({ page }) => {
    await page.click('button[role="button"]:has-text("Второй пункт")');
    await page.waitForTimeout(250);
    await page.click('text=Second option');
    await page.waitForTimeout(250);

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('2пункт_аккордион_radio2.png');
  });
  test('Accordion click2 option 5', async ({ page }) => {
    await page.click('button[role="button"]:has-text("Второй пункт")');
    await page.waitForTimeout(250);
    await page.click('div[role="button"]');
    await page.waitForTimeout(250);
    await page.click('text=Option five');
    await page.waitForTimeout(300);

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('2пункт_аккордион_option5.png');
  });
  test('Accordion click3', async ({ page }) => {
    await page.click('button[role="button"]:has-text("Третий пункт")');
    await page.waitForTimeout(250);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('3пункт_аккордион.png');
  });
});
