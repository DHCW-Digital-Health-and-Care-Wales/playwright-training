import { test, expect } from '@playwright/test';

test('Module 03: Debugging', async ({ page }) => {
  await page.goto('/');

  // This test is designed to fail so you can practice debugging.
  // DO NOT fix the code below manually. Use the VS Code Debugger.

  // Attempt to click a button that doesn't exist or is hidden
  await page.getByRole('button', { name: 'Invisible Button' }).click({ timeout: 5000 });

  await expect(page).toHaveTitle(/Digital Health/);
});
