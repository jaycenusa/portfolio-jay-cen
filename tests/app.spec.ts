import { expect, test } from '@playwright/test';

test.describe('Portfolio', () => {
  test('shows navigation links on the home page', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('link', { name: 'About Me' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Achievements' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Projects' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible();
  });

  test('navigates to the projects page', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('link', { name: 'Projects' }).click();

    await expect(page).toHaveURL('/projects');
  });
});
