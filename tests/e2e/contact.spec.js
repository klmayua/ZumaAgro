import { test, expect } from '@playwright/test';

/**
 * Contact Form E2E Tests
 * Tests the contact form submission functionality
 */

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test('should display contact form', async ({ page }) => {
    await expect(page.getByText('Contact Us')).toBeVisible();
    await expect(page.getByText('Send us a message')).toBeVisible();
  });

  test('should have all required form fields', async ({ page }) => {
    await expect(page.getByLabel('Department')).toBeVisible();
    await expect(page.getByLabel('Name')).toBeVisible();
    await expect(page.getByLabel('Email')).toBeVisible();
    await expect(page.getByLabel('Subject')).toBeVisible();
    await expect(page.getByLabel('Message')).toBeVisible();
  });

  test('should submit form successfully', async ({ page }) => {
    // Fill form
    await page.getByLabel('Department').selectOption('general');
    await page.getByLabel('Name').fill('Test User');
    await page.getByLabel('Email').fill('test@example.com');
    await page.getByLabel('Subject').fill('Test Inquiry');
    await page.getByLabel('Message').fill('This is a test message.');

    // Submit form
    await page.getByRole('button', { name: 'Send Message' }).click();

    // Wait for success message
    await expect(page.getByText('Thank you for your message')).toBeVisible({ timeout: 10000 });
  });

  test('should show validation error for invalid email', async ({ page }) => {
    await page.getByLabel('Name').fill('Test User');
    await page.getByLabel('Email').fill('invalid-email');
    await page.getByLabel('Subject').fill('Test');
    await page.getByLabel('Message').fill('Test message');

    await page.getByRole('button', { name: 'Send Message' }).click();

    // Form should not submit with invalid email
    await page.waitForTimeout(1000);
    expect(await page.getByLabel('Email').getAttribute('value')).toBe('invalid-email');
  });

  test('should show loading state during submission', async ({ page }) => {
    await page.getByLabel('Name').fill('Test User');
    await page.getByLabel('Email').fill('test@example.com');
    await page.getByLabel('Subject').fill('Test');
    await page.getByLabel('Message').fill('Test message');

    await page.getByRole('button', { name: 'Send Message' }).click();

    // Check for loading state
    await expect(page.getByText('Sending...')).toBeVisible();
  });

  test('should clear form after successful submission', async ({ page }) => {
    await page.getByLabel('Department').selectOption('general');
    await page.getByLabel('Name').fill('Test User');
    await page.getByLabel('Email').fill('test@example.com');
    await page.getByLabel('Subject').fill('Test');
    await page.getByLabel('Message').fill('Test message');

    await page.getByRole('button', { name: 'Send Message' }).click();

    await expect(page.getByText('Thank you for your message')).toBeVisible({ timeout: 10000 });

    // Form should be cleared
    await expect(page.getByLabel('Name')).toHaveValue('');
    await expect(page.getByLabel('Email')).toHaveValue('');
    await expect(page.getByLabel('Subject')).toHaveValue('');
    await expect(page.getByLabel('Message')).toHaveValue('');
  });

  test('should display contact information', async ({ page }) => {
    await expect(page.getByText('Get In Touch')).toBeVisible();
    await expect(page.getByText('Contact Information')).toBeVisible();
    await expect(page.getByText('info@zumaagro.com')).toBeVisible();
  });

  test('should display department directory', async ({ page }) => {
    await expect(page.getByText('Department Directory')).toBeVisible();
    await expect(page.getByText('CEO Office')).toBeVisible();
    await expect(page.getByText('Operations')).toBeVisible();
  });

  test('should display FAQ section', async ({ page }) => {
    await expect(page.getByText('Frequently Asked Questions')).toBeVisible();
    await expect(
      page.getByText('How can I become a supplier for Zuma Agro?')
    ).toBeVisible();
  });
});
