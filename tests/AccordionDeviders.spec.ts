import { test, expect } from '@playwright/test';

test('accordion deviders open', async ({ page }) => {
  await page.goto('http://localhost:3000/#/accordionDeviders');
  await page.getByRole('button', { name: 'Первый пункт' }).first().click();
  await page.getByRole('button', { name: 'Второй пункт' }).first().click();
  await page.getByRole('button', { name: 'Третий пункт' }).first().click();
  await page.getByRole('button', { name: 'Первый пункт' }).nth(1).click();
  await page.getByRole('button', { name: 'Второй пункт' }).nth(1).click();
  await page.getByRole('button', { name: 'Третий пункт' }).nth(1).click();
  await page.getByRole('button', { name: 'Первый пункт' }).nth(2).click();
  await page.getByRole('button', { name: 'Второй пункт' }).nth(2).click();
  await page.getByRole('button', { name: 'Третий пункт' }).nth(2).click();
  await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
});
test('accordion deviders open Dark', async ({ page }) => {
  await page.goto('http://localhost:3000/#/accordionDeviders');
  await page.locator('label[role="switch"] span').click();
  await page.getByRole('button', { name: 'Первый пункт' }).first().click();
  await page.getByRole('button', { name: 'Второй пункт' }).first().click();
  await page.getByRole('button', { name: 'Третий пункт' }).first().click();
  await page.getByRole('button', { name: 'Первый пункт' }).nth(1).click();
  await page.getByRole('button', { name: 'Второй пункт' }).nth(1).click();
  await page.getByRole('button', { name: 'Третий пункт' }).nth(1).click();
  await page.getByRole('button', { name: 'Первый пункт' }).nth(2).click();
  await page.getByRole('button', { name: 'Второй пункт' }).nth(2).click();
  await page.getByRole('button', { name: 'Третий пункт' }).nth(2).click();
  await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
});
