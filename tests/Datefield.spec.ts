import { test, expect } from '@playwright/test';
test.describe('Date field', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://magstrong07.github.io/admiral-react-test/#/date_field');
  });
  test('date field input text', async ({ page }) => {
    await page.click('input');
    await page.press('input', 'ArrowLeft');
    await page.press('input', 'ArrowLeft');
    await page.press('input', 'ArrowLeft');
    await page.press('input', 'ArrowLeft');
    await page.press('input', 'ArrowLeft');
    await page.press('input', 'ArrowLeft');
    await page.press('input', 'ArrowLeft');
    await page.press('input', 'ArrowLeft');
    await page.press('input', 'ArrowLeft');
    await page.press('input', 'ArrowLeft');
    await page.fill('input', '01.05.2021');
    await page.waitForTimeout(250);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('date_field_input_text.png');
  });
  test('date field calendar', async ({ page }) => {
    await page.click('text=Labelsuccesserrorvalue >> :nth-match(svg, 2)');

    await page.click('text=10');
    await page.waitForTimeout(250);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('date_field_calendar.png');
  });
});
