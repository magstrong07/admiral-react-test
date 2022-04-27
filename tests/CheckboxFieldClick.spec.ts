import { test, expect } from '@playwright/test';
test.describe('Checkbox Field group', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://magstrong07.github.io/admiral-react-test/#/checkbox_field');
  });
  test('Checkbox Field group click 3', async ({ page }) => {
    await page.check('input[type="checkbox"]');
    await page.check('text=Не управляемый маленький чекбокс >> input[type="checkbox"]');
    await page.check(
      'text=Error не управляемый чекбоксВариация с дополнительно декорированным текстом >> input[type="checkbox"]',
    );
    await page.waitForTimeout(250);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('checkbox_field_click_3.png');
  });
});
