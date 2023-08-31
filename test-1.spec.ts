// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('http://localhost:3000/#/checkbox_field');
//   await page.getByText('Управляемый чекбокс', { exact: true }).click();
//   await page.getByText('Не управляемый маленький чекбокс', { exact: true }).click();
//   await page.getByText('Error не управляемый чекбоксВариация с дополнительно декорированным текстом').click();
//   await page.getByLabel('Управляемый чекбокс', { exact: true }).uncheck();
//   await page.getByLabel('Error не управляемый чекбоксВариация с дополнительно декорированным текстом').uncheck();
//   await page.getByLabel('Не управляемый маленький чекбокс', { exact: true }).uncheck();
// });


// await page.goto('http://localhost:3000/#/accordion');
// await page.locator('#accordion_title_accordion1-item3').click();
// await page.locator('#accordion_title_accordion1-item2').click();
// await page.getByPlaceholder('Placeholder').click();
// await page.locator('div').filter({ hasText: /^text 4$/ }).click();
// await page.locator('#selectValueWrapper').getByText('text 4').click();
// await page.locator('div').filter({ hasText: /^texttt 6$/ }).click();