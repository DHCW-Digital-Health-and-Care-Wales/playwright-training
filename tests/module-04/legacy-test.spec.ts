import { test, expect } from '@playwright/test';

test('Module 04: Legacy Code Refactor', async ({ page }) => {
  //Navigate to site
  await page.goto('https://dhcw.nhs.wales/');

  // Hard wait - BAD PRACTICE
  await page.waitForTimeout(2000);

  // Ugly XPath selector to find the search input
  await page.locator('//*[@id="navKeywords"]').fill('Strategy');

  // Hard wait
  await page.waitForTimeout(500);

  // Click the search button with a generic class selector
  await page.locator('.btn-search').first().click();

  // Hard wait for results
  await page.waitForTimeout(3000);

  // Assertion on specific text using generic locator
  const text = await page.locator('body').innerText();
  if (!text.includes('Strategy')) {
    throw new Error('Search failed');
  }
});
