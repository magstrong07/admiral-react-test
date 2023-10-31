import { test, expect } from '@playwright/test';
import { links } from '../src/components/Welcome/links';
links.sort();
test.describe('Coomponents', () => {
  for (const index in links) {
    const url = links[index];

    test(links[index], async ({ page }) => {
      await page.goto(`http://localhost:3000/#${url}`);
      await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
    });
    test(links[index] + ' Dark', async ({ page }) => {
      await page.goto(`http://localhost:3000/#${url}`);
      // Dark-mode switch
      await page.getByLabel('Dark_mode').check();
      await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
    });
  }
});
