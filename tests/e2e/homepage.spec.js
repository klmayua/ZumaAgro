import { test, expect } from '@playwright/test';

/**
 * Homepage E2E Tests
 * Tests the main landing page of Zuma Agro website
 */

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the homepage with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Zuma Agro/);
  });

  test('should display the main navigation', async ({ page }) => {
    const navLinks = [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Operations', href: '/operations' },
      { name: 'Model', href: '/model' },
      { name: 'Sustainability', href: '/sustainability' },
      { name: 'Investors', href: '/investors' },
      { name: 'Media', href: '/media' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ];

    for (const link of navLinks) {
      await expect(page.getByRole('link', { name: link.name })).toBeVisible();
    }
  });

  test('should display the hero section', async ({ page }) => {
    await expect(
      page.getByText('Transforming Agriculture Through Strategic Integration')
    ).toBeVisible();

    await expect(
      page.getByText('Livestock · Grains · Bee Farming · Processing · Export')
    ).toBeVisible();
  });

  test('should display CTAs in hero section', async ({ page }) => {
    await expect(
      page.getByRole('link', { name: 'Explore Our Integrated Model' })
    ).toBeVisible();

    await expect(
      page.getByRole('link', { name: 'Download Corporate Overview' })
    ).toBeVisible();
  });

  test('should display value propositions', async ({ page }) => {
    const propositions = [
      'Secure Production',
      'End-to-End Control',
      'Export Excellence',
      'Sustainable Practices',
      'Community Impact',
      'Investor Ready',
    ];

    for (const prop of propositions) {
      await expect(page.getByText(prop)).toBeVisible();
    }
  });

  test('should display metrics dashboard', async ({ page }) => {
    await expect(page.getByText('Our Impact In Numbers')).toBeVisible();

    // Check for metric labels
    await expect(page.getByText('Cattle Under Management')).toBeVisible();
    await expect(page.getByText('Hectares Cultivated')).toBeVisible();
    await expect(page.getByText('Annual Grain Production')).toBeVisible();
    await expect(page.getByText('Bee Colonies')).toBeVisible();
  });

  test('should display footer with newsletter signup', async ({ page }) => {
    await expect(
      page.getByText('ZUMA AGRO ALLIED INTEGRATED LIMITED')
    ).toBeVisible();

    await expect(page.getByPlaceholder('Your email')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Subscribe' })).toBeVisible();
  });

  test('should have working search functionality', async ({ page }) => {
    // Click search button
    await page.getByRole('button', { name: /search/i }).first().click();

    // Check search modal appears
    await expect(page.getByPlaceholder('Search Zuma Agro...')).toBeVisible();

    // Type search query
    await page.getByPlaceholder('Search Zuma Agro...').fill('about');

    // Check results appear
    await expect(page.getByText('About Zuma Agro')).toBeVisible();
  });

  test('should be responsive on mobile', async ({ page }) => {
    // Set to mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });

    // Check mobile menu button exists
    await expect(page.getByRole('button', { name: /menu/i })).toBeVisible();

    // Click mobile menu
    await page.getByRole('button', { name: /menu/i }).click();

    // Check mobile navigation appears
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
  });

  test('should navigate to about page', async ({ page }) => {
    await page.getByRole('link', { name: 'About' }).click();
    await expect(page).toHaveURL('/about');
    await expect(page.getByText('About Zuma Agro')).toBeVisible();
  });

  test('should have no console errors', async ({ page }) => {
    const errors = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    await page.reload();
    expect(errors).toHaveLength(0);
  });
});
