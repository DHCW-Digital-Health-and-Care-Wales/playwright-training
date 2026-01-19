import { test, expect } from '@playwright/test';

test('Module 03: Debugging', async ({ page }) => {
  // 1. Check the page title
  await page.goto('/');
  await expect(page).toHaveTitle(/Digital Health and Care Wales/);

  // 2. Click the 'Job Vacancies' link (navigates to /join-our-team/job-vacancies/)
  // Note: We use getByRole for better accessibility support
  await page.getByRole('link', { name: 'Job Vacancies' }).click();
  await expect(page).toHaveURL(/.*job-vacancies/);

  // 3. Verify the page contains a 'Job vacancies' H1 element
  await expect(page.getByRole('heading', { name: 'Job vacancies', level: 1 })).toBeVisible();

  // 4. Navigate 'back' to return to the homepage
  await page.goBack();
  await expect(page).toHaveTitle(/Digital Health and Care Wales/);

  // 5. Find and click the 'Privacy Policy' link in the footer
  // FAIL: Deliberate spelling mistake "Polllicy"
  await page.getByRole('link', { name: 'Privacy Polllicy' }).click();

  // 6. Verify the Privacy Policy page has the H1 heading 'Privacy Policy'
  await expect(page.getByRole('heading', { name: 'Privacy Policy', level: 1 })).toBeVisible();
});
