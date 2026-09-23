import { expect, test } from '@playwright/test';

test.describe('Portfolio', () => {
  test('shows navigation tabs and logo on the single page', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('link', { name: 'Jay Cen logo' })).toBeVisible();
    await expect(page.getByRole('img', { name: 'JC Logo' }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'about', exact: true })).toBeVisible();
    await expect(page.getByRole('link', { name: 'skills', exact: true })).toBeVisible();
    await expect(page.getByRole('link', { name: 'projects' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'experience' })).toBeVisible();
  });

  test('keeps all section content on one page', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('#about')).toBeVisible();
    await expect(page.locator('#skills')).toBeAttached();
    await expect(page.locator('#projects')).toBeAttached();
    await expect(page.locator('#experience')).toBeAttached();

    await expect(page.getByText('// 001 — About Me')).toBeVisible();
    await expect(page.getByRole('heading', { name: /Jay\s*Cen\./i })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Tech stack' })).toBeAttached();
    await expect(page.getByRole('heading', { name: 'Selected work' })).toBeAttached();
    await expect(page.getByRole('heading', { name: 'Work history' })).toBeAttached();
  });

  test('scrolls to the skills section from the Skills tab', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('link', { name: 'skills', exact: true }).click();

    await expect(page).toHaveURL(/#skills$/);
    await expect(page.locator('#skills')).toBeInViewport();
    await expect(page.getByRole('heading', { name: 'Tech stack' })).toBeInViewport();
  });

  test('scrolls to the experience section from the Experience tab', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('link', { name: 'experience' }).click();

    await expect(page).toHaveURL(/#experience$/);
    await expect(page.locator('#experience')).toBeInViewport();
    await expect(page.getByRole('heading', { name: 'Work history' })).toBeInViewport();
  });

  test('scrolls to the projects section from the Projects tab', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('link', { name: 'projects' }).click();

    await expect(page).toHaveURL(/#projects$/);
    await expect(page.locator('#projects')).toBeInViewport();
    await expect(page.getByRole('heading', { name: 'Selected work' })).toBeInViewport();
  });
});
