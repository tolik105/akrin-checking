import { test, expect } from '@playwright/test';

test.describe('Homepage Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have the correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Akrin.*IT Solutions Provider in Japan/);
  });

  test('should match homepage screenshot', async ({ page }) => {
    // Wait for the page to be fully loaded before taking a screenshot
    await page.waitForLoadState('networkidle');
    
    // Take a screenshot and compare it to the baseline
    await expect(page).toHaveScreenshot('homepage.png', {
      fullPage: true,
      maxDiffPixels: 100 // Allow for minor rendering differences
    });
  });

});
