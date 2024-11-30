import { Page } from '@playwright/test';

export async function clearInputField(page: Page, selector: string) {
  await page.click(selector, { clickCount: 3 });
  await page.keyboard.press('Backspace');
}

export async function fillLoginForm(page: Page, email: string, password: string) {
  await page.getByLabel(/email/i).fill(email);
  await page.getByLabel(/password/i).fill(password);
}