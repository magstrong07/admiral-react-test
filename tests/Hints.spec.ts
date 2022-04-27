import { test, expect } from '@playwright/test';
test.describe('Hint', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://magstrong07.github.io/admiral-react-test/#/hint');
  });
  test('Hint click', async ({ page }) => {
    await page.click('[aria-label="Additional information"]');
    await page.waitForTimeout(250);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('Hint_click.png');
    await page.waitForTimeout(250);
    await page.click('[aria-label="Закрыть подсказку"]');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('Hint_close.png');
  });
  test('Hint hover', async ({ page }) => {
    await page.hover(':nth-match([aria-label="Additional information"], 2)');
    await page.waitForTimeout(250);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('hint_hover.png');
  });
});
