import { Page } from '@playwright/test';

export async function waitForPageLoad(page: Page) {
  await page.waitForLoadState('networkidle');
  await page.waitForLoadState('domcontentloaded');
}

export async function clearInputField(page: Page, selector: string) {
  await page.click(selector, { clickCount: 3 });
  await page.keyboard.press('Backspace');
}