import test, { expect } from '@playwright/test';
import { URLs } from '../../../utils/constants';

test.describe('find article', () => {
  test('find article about playwright', async ({ page }) => {
    await page.goto(URLs.MAIN_PAGE);
    await page
      .getByPlaceholder('Search Wikipedia')
      .fill('Playwright (software)');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(2000);
    const pageContent = await page.locator('#mw-content-text').allInnerTexts();
    await expect(pageContent[0]).toContain('open-source');
  });
});
