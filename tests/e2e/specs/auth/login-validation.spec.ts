import { test, expect } from '@playwright/test';
import { waitForPageLoad } from '../../utils/page-utils';
import { fillLoginForm } from '../../utils/form-utils';
import { routes } from '../../fixtures/routes';
import { userData } from '../../fixtures/user-data';

test.describe('Login Validation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(routes.login);
    await waitForPageLoad(page);
  });

  test('should show error for invalid credentials', async ({ page }) => {
    const { email, password } = userData.invalidUser;
    await fillLoginForm(page, email, password);
    await page.getByRole('button', { name: /login/i }).click();
    
    const errorMessage = await page.getByText(/invalid credentials/i);
    await expect(errorMessage).toBeVisible();
  });
});