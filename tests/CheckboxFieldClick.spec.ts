import { test, expect } from '@playwright/test';
test.describe('Checkbox Field group', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/#/checkbox_field');
  });
  test('Checkbox Field group click 3', async ({ page }) => {
    await page.getByText('Управляемый чекбокс', { exact: true }).click();
    await page.getByLabel('Не управляемый маленький чекбокс', { exact: true }).check();
    await page.getByLabel('Error не управляемый чекбоксВариация с дополнительно декорированным текстом').check();
    await page.getByLabel('Не управляемый маленький чекбокс indeterminateВариация с дополнительным текстом').check();
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
  test('Checkbox Field group click 3 Dark', async ({ page }) => {
    await page.getByLabel('Dark_mode').check();
    await page.getByText('Управляемый чекбокс', { exact: true }).click();
    await page.getByLabel('Не управляемый маленький чекбокс', { exact: true }).check();
    await page.getByLabel('Error не управляемый чекбоксВариация с дополнительно декорированным текстом').check();
    await page.getByLabel('Не управляемый маленький чекбокс indeterminateВариация с дополнительным текстом').check();
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
  });
});
