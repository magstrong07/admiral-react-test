import { test, expect } from '@playwright/test';
import { links } from '../src/components/Welcome/links';
links.sort();
test.describe('Coomponents', () => {
  for (const index in links) {
    const url = links[index];
    // const version = '0.01';
    // const screenName = 'v' + version + links[index].toLowerCase().replace(/ /g, '-') + '.png';

    test(links[index], async ({ page }) => {
      await page.goto(`https://magstrong07.github.io/admiral-react-test/#${url}`);
      await page.evaluate('document.fonts.ready');
      // expect(await page.screenshot({ fullPage: true, scale: 'css' })).toMatchSnapshot(screenName);
      await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' });
    });
  }
});
