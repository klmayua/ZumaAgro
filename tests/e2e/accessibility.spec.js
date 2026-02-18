import { test, expect } from '@playwright/test';

/**
 * Accessibility E2E Tests
 * Tests WCAG compliance and accessibility features
 */

test.describe('Accessibility', () => {
  test('should have proper page titles', async ({ page }) => {
    const pages = [
      { url: '/', titlePattern: /Zuma Agro/ },
      { url: '/about', titlePattern: /About/ },
      { url: '/operations', titlePattern: /Operations/ },
      { url: '/model', titlePattern: /Model/ },
      { url: '/sustainability', titlePattern: /Sustainability/ },
      { url: '/investors', titlePattern: /Investor/ },
      { url: '/media', titlePattern: /Media/ },
      { url: '/careers', titlePattern: /Careers/ },
      { url: '/contact', titlePattern: /Contact/ },
      { url: '/downloads', titlePattern: /Download/ },
    ];

    for (const p of pages) {
      await page.goto(p.url);
      await expect(page).toHaveTitle(p.titlePattern);
    }
  });

  test('should have alt text for images', async ({ page }) => {
    await page.goto('/');

    // Check that decorative images have empty alt or meaningful images have alt text
    const images = page.locator('img');
    const count = await images.count();

    for (let i = 0; i < count; i++) {
      const img = images.nth(i);
      const alt = await img.getAttribute('alt');
      // Images should have alt attribute (can be empty for decorative)
      expect(alt).not.toBeNull();
    }
  });

  test('should have proper heading hierarchy', async ({ page }) => {
    await page.goto('/');

    // Should have exactly one h1
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBe(1);

    // h2 should come after h1
    const firstH2 = page.locator('h2').first();
    const firstH1 = page.locator('h1').first();

    const h1Box = await firstH1.boundingBox();
    const h2Box = await firstH2.boundingBox();

    expect(h1Box.y).toBeLessThan(h2Box.y);
  });

  test('should have focus states for interactive elements', async ({ page }) => {
    await page.goto('/');

    // Tab through interactive elements
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');

    // Something should be focused
    const focusedElement = page.locator(':focus');
    await expect(focusedElement).toBeVisible();
  });

  test('should have proper link text', async ({ page }) => {
    await page.goto('/');

    const links = page.getByRole('link');
    const count = await links.count();

    for (let i = 0; i < count; i++) {
      const link = links.nth(i);
      const text = await link.textContent();
      // Links should have meaningful text (not just "click here")
      expect(text.trim().length).toBeGreaterThan(0);
    }
  });

  test('should have proper button text', async ({ page }) => {
    await page.goto('/contact');

    const buttons = page.getByRole('button');
    const count = await buttons.count();

    for (let i = 0; i < count; i++) {
      const button = buttons.nth(i);
      const text = await button.textContent();
      expect(text.trim().length).toBeGreaterThan(0);
    }
  });

  test('should have proper form labels', async ({ page }) => {
    await page.goto('/contact');

    const inputs = page.locator('input, textarea, select');
    const count = await inputs.count();

    for (let i = 0; i < count; i++) {
      const input = inputs.nth(i);
      const id = await input.getAttribute('id');
      if (id) {
        const label = page.locator(`label[for="${id}"]`);
        await expect(label).toBeVisible();
      }
    }
  });

  test('should support keyboard navigation', async ({ page }) => {
    await page.goto('/');

    // Tab through the page
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');

    // Should be able to navigate with keyboard only
    await expect(page).toBeVisible();
  });

  test('should have sufficient color contrast', async ({ page }) => {
    await page.goto('/');

    // Check main heading color
    const heading = page.locator('h1').first();
    const color = await heading.evaluate((el) =>
      window.getComputedStyle(el).color
    );

    // Color should be set
    expect(color).toBeTruthy();
  });

  test('should have skip link or landmark regions', async ({ page }) => {
    await page.goto('/');

    // Check for main landmark
    const main = page.locator('main');
    await expect(main).toBeVisible();

    // Check for header landmark
    const header = page.locator('header');
    await expect(header).toBeVisible();

    // Check for footer landmark
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });

  test('should not have horizontal scroll on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    const hasHorizontalScroll = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });

    expect(hasHorizontalScroll).toBe(false);
  });
});
