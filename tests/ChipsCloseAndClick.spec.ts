import { test, expect } from '@playwright/test';
test.describe('Chips', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://magstrong07.github.io/admiral-react-test/#/chips');
  });
  test('Chips close', async ({ page }) => {
    await page.locator('.sc-gsNilK').first().click();
    await page.locator('.sc-gsNilK').first().click();
    await page.locator('.sc-gsNilK.AkFfd').first().click();
    await page.locator('.sc-gsNilK.AkFfd').first().click();
    await page.locator('.sc-gsNilK.AkFfd').first().click();
    await page.locator('.sc-gsNilK.AkFfd path').first().click();
    await page.locator('.sc-gsNilK.AkFfd').first().click();
    await page.locator('.sc-gsNilK.AkFfd').click();
    await page.waitForTimeout(250);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('chips_close.png');
  });
  test('Chips select', async ({ page }) => {
    await page.locator('.sc-bXTejn.jFOqQO .sc-eGRUor').first().click();
    await page
      .locator('div:nth-child(4) div .ChipsTest__Container-sc-1u2aus7-0 div:nth-child(7) .sc-bXTejn .sc-eGRUor')
      .click();
    await page.locator('.sc-bXTejn.enAvvC .sc-eGRUor').first().click();
    await page
      .locator('div:nth-child(12) div .ChipsTest__Container-sc-1u2aus7-0 div:nth-child(7) .sc-bXTejn .sc-eGRUor')
      .click();
    await page.locator('.sc-bXTejn.iKaBVz .sc-eGRUor').first().click();
    await page
      .locator('div:nth-child(20) div .ChipsTest__Container-sc-1u2aus7-0 div:nth-child(7) .sc-bXTejn .sc-eGRUor')
      .click();
    await page.locator('.sc-bXTejn.ehZGGv .sc-eGRUor').first().click();
    await page
      .locator('div:nth-child(28) div .ChipsTest__Container-sc-1u2aus7-0 div:nth-child(7) .sc-bXTejn .sc-eGRUor')
      .click();

    await page.waitForTimeout(250);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('chips_select.png');
  });
});
