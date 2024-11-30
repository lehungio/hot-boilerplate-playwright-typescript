import { test, expect } from '@playwright/test';
import { waitForPageLoad } from '../../utils/page-utils';

test.describe('Google Search', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.google.com');
    await waitForPageLoad(page);
  });

  test('should search for hotonline.site', async ({ page }) => {
    // Accept cookies if the dialog appears
    const cookieDialog = page.getByRole('dialog');
    if (await cookieDialog.isVisible()) {
      await page.getByRole('button', { name: /accept all/i }).click();
    }

    // Perform the search
    const searchInput = page.getByRole('combobox', { name: 'Search' });
    await searchInput.fill('hotonline.site');
    await searchInput.press('Enter');

    // Wait for search results
    await page.waitForSelector('[data-testid="result-stats"], #result-stats');
    
    // Verify search results
    const searchResults = page.locator('#search');
    await expect(searchResults).toBeVisible();
    
    // Verify the keyword appears in results
    const resultText = await searchResults.innerText();
    expect(resultText.toLowerCase()).toContain('hotonline.site');
  });
});