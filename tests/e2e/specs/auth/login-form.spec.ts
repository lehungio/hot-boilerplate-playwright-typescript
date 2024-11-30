import { test, expect } from '@playwright/test';
import { waitForPageLoad } from '../../utils/page-utils';
import { routes } from '../../fixtures/routes';

test.describe('Login Form Display', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(routes.login);
    await waitForPageLoad(page);
  });

  test('should display login form elements', async ({ page }) => {
    await expect(page.getByLabel(/email/i)).toBeVisible();
    await expect(page.getByLabel(/password/i)).toBeVisible();
    await expect(page.getByRole('button', { name: /login/i })).toBeVisible();
  });
});