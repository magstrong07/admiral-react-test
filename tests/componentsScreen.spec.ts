import { test, expect } from '@playwright/test';
import { links } from '../src/components/welcome/links';
links.sort();
test.describe('Coomponents', () => {
  for (const index in links) {
    const url = links[index];
    const version = '44';
    const screenName = 'v' + version + links[index].toLowerCase().replace(/ /g, '-') + '.png';

    test(links[index], async ({ page }) => {
      await page.goto(`http://localhost:3000${url}`);
      expect(await page.screenshot({ fullPage: true })).toMatchSnapshot(screenName);
    });
  }
});
