import { test, expect } from '@playwright/test';
import { waitForPageLoad, clearInputField } from '../utils/test-utils';
import { testData } from '../fixtures/test-data';

test.describe('Authentication', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(testData.urls.login);
    await waitForPageLoad(page);
  });

  test('should display login form', async ({ page }) => {
    await expect(page.getByLabel(/email/i)).toBeVisible();
    await expect(page.getByLabel(/password/i)).toBeVisible();
    await expect(page.getByRole('button', { name: /login/i })).toBeVisible();
  });

  test('should show error for invalid credentials', async ({ page }) => {
    await page.getByLabel(/email/i).fill('invalid@example.com');
    await page.getByLabel(/password/i).fill('wrongpassword');
    await page.getByRole('button', { name: /login/i }).click();
    
    const errorMessage = await page.getByText(/invalid credentials/i);
    await expect(errorMessage).toBeVisible();
  });
});