import { test, expect } from '@playwright/test';
test.describe('search select field', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://magstrong07.github.io/admiral-react-test/#/search_select_field');
  });
  test('search select field click', async ({ page }) => {
    await page.click('#selectValueWrapper');
    await page.click(
      '#selectDropdownContainer >> text=text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text text 2 t',
    );
    await page.click(
      'text=s, successlabelteeext 1text 2 text text 2 text text 2 text text 2 text text 2 te >> #selectValueWrapper',
    );
    await page.click('#selectDropdownContainer div div:has-text("texttt 6")');
    await page.click(
      'text=m, undefinedlabelteeext 1text 2 text text 2 text text 2 text text 2 text text 2  >> #selectValueWrapper',
    );
    await page.keyboard.type('tex');
    await page.waitForTimeout(350);

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('search_select_field.png');
  });
});
