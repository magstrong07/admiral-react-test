import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Go to http://localhost:6006/?path=/story/admiral-2-1-breadcrumbs--sizes
  await page.goto('http://localhost:6006/?path=/story/admiral-2-1-breadcrumbs--sizes');

  // Click text=page 1page 3page 4current page >> button
  await page.frameLocator('#storybook-preview-iframe').locator('text=page 1page 3page 4current page >> button').click();
});
