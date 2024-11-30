import { test, expect } from '@playwright/test';
import { waitForPageLoad } from '../../utils/page-utils';
import { routes } from '../../fixtures/routes';

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(routes.home);
    await waitForPageLoad(page);
  });

  test('should have working navigation links', async ({ page }) => {
    const navLinks = await page.getByRole('navigation').getByRole('link');
    await expect(navLinks).toHaveCount(3);
  });
});