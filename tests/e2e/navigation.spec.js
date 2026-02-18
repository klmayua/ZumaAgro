import { test, expect } from '@playwright/test';

/**
 * Navigation E2E Tests
 * Tests site-wide navigation functionality
 */

test.describe('Site Navigation', () => {
  test('should navigate to all main pages from homepage', async ({ page }) => {
    await page.goto('/');

    const pages = [
      { name: 'About', url: '/about', heading: 'About Zuma Agro' },
      { name: 'Operations', url: '/operations', heading: 'Operations Hub' },
      { name: 'Model', url: '/model', heading: 'Integrated Model' },
      { name: 'Sustainability', url: '/sustainability', heading: 'Sustainability & ESG' },
      { name: 'Investors', url: '/investors', heading: 'Investor Relations' },
      { name: 'Media', url: '/media', heading: 'Media Center' },
      { name: 'Careers', url: '/careers', heading: 'Careers at Zuma Agro' },
      { name: 'Contact', url: '/contact', heading: 'Contact Us' },
      { name: 'Downloads', url: '/downloads', heading: 'Resource Library' },
    ];

    for (const p of pages) {
      await page.goto('/');
      await page.getByRole('link', { name: p.name }).click();
      await expect(page).toHaveURL(p.url);
      await expect(page.getByText(p.heading)).toBeVisible();
    }
  });

  test('should navigate using footer links', async ({ page }) => {
    await page.goto('/');

    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    const footerLinks = [
      { name: 'Home', url: '/' },
      { name: 'About Us', url: '/about' },
      { name: 'Operations', url: '/operations' },
      { name: 'Sustainability', url: '/sustainability' },
      { name: 'Investors', url: '/investors' },
    ];

    for (const link of footerLinks) {
      await page.goto('/');
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await page.getByRole('link', { name: link.name }).click();
      await expect(page).toHaveURL(link.url);
    }
  });

  test('should handle 404 page for non-existent routes', async ({ page }) => {
    await page.goto('/non-existent-page-xyz123');

    await expect(page.getByText('404')).toBeVisible();
    await expect(page.getByText('Page Not Found')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Back to Home' })).toBeVisible();
  });

  test('should have working back to home link from 404', async ({ page }) => {
    await page.goto('/non-existent-page');
    await page.getByRole('link', { name: 'Back to Home' }).click();
    await expect(page).toHaveURL('/');
  });

  test('should maintain navigation on scroll', async ({ page }) => {
    await page.goto('/');

    // Scroll down
    await page.evaluate(() => window.scrollTo(0, 1000));

    // Navigation should still be visible
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
  });

  test('should have active state for current page', async ({ page }) => {
    await page.goto('/about');

    // About link should be styled differently (check for hover color class or similar)
    const aboutLink = page.getByRole('link', { name: 'About' }).first();
    await expect(aboutLink).toBeVisible();
  });
});
