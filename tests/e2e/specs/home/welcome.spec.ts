import { test, expect } from '@playwright/test';
import { waitForPageLoad } from '../../utils/page-utils';
import { routes } from '../../fixtures/routes';

test.describe('Welcome Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(routes.home);
    await waitForPageLoad(page);
  });

  test('should display the welcome message', async ({ page }) => {
    const welcomeMessage = await page.getByRole('heading', { name: /welcome/i });
    await expect(welcomeMessage).toBeVisible();
  });
});