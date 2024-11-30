import { test, expect } from '@playwright/test';
import { waitForPageLoad } from '../utils/test-utils';
import { testData } from '../fixtures/test-data';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(testData.urls.home);
    await waitForPageLoad(page);
  });

  test('should display the welcome message', async ({ page }) => {
    const welcomeMessage = await page.getByRole('heading', { name: /welcome/i });
    await expect(welcomeMessage).toBeVisible();
  });

  test('should have working navigation links', async ({ page }) => {
    const navLinks = await page.getByRole('navigation').getByRole('link');
    await expect(navLinks).toHaveCount(3); // Assuming 3 navigation links
  });
});