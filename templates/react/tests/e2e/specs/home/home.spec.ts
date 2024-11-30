import { test, expect } from '@playwright/test';
import { waitForPageLoad } from '../../utils/page-utils';
import { routes } from '../../fixtures/routes';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(routes.home);
    await waitForPageLoad(page);
  });

  test('should display welcome message', async ({ page }) => {
    const welcomeMessage = await page.getByRole('heading', { name: /welcome/i });
    await expect(welcomeMessage).toBeVisible();
  });

  test('should have working navigation', async ({ page }) => {
    const navLinks = await page.getByRole('navigation').getByRole('link');
    await expect(navLinks).toHaveCount(3);
  });
});