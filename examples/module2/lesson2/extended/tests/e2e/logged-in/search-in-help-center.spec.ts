import test, { expect } from '@playwright/test';
import { HelpDesk } from '../../../pages/helpDesk.page';
import { MainPage } from '../../../pages/main.page';
import { URLs } from '../../../utils/constants';

test.describe('search in help center', () => {
  test('search about watchlist', async ({ page }) => {
    const mainPage = new MainPage(page);
    const helpDesk = new HelpDesk(page);

    await page.goto(URLs.MAIN_PAGE);
    await mainPage.goToComunityPortal();
    await mainPage.gotToHelpDesk();
    await helpDesk.searchForQuestion('watchlist');
    const resultsContainer = page.locator('.mw-search-results-container');
    await expect(resultsContainer).toBeVisible();
    const articles = resultsContainer.locator('li');
    await expect(await articles.count()).toBeGreaterThan(0);
  });
});
