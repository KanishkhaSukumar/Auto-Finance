const { test, expect } = require('@playwright/test');

test.use({ headless: false });

test('Login and create lead flow', async ({ page }) => {
  // Step 1: Open website Gowtham
  await page.goto('https://qa-autofin.carandbike.com/');
  await expect(page).toHaveTitle(/Mahindra First Choice/);

  // Step 2: Fill username
  await page.fill('#user_name', 'AFM1');
  await page.waitForTimeout(1000);

  // Step 3: Fill password
  await page.fill('#username_password', 'AFM1@2024');
  await page.waitForTimeout(1000);

  // Step 4: Click login
  await page.click('button[type="submit"]');

  // Step 5: Wait for dashboard
  await page.waitForURL(/module=SSI_Disbursement&action=index/, { timeout: 10000 });

  // Step 6: Click "Leads"
  await page.locator('a:has(span.hide-menu:has-text("Leads"))').click();
  await page.waitForTimeout(1000);

  // Step 7: Click "Create Lead"
  await page.getByRole('link', { name: 'Create Lead' }).click();
  await page.waitForTimeout(1000);

  // Step 8: Wait for Create Lead page
  await page.waitForURL(/module=Leads&action=EditView&return_module=Leads&return_action=DetailView/, { timeout: 10000 });
  await page.waitForTimeout(1000);

  // Step 9: Validate Create Lead form visible
  await expect(page.locator('h2.module-title-text')).toHaveText('CREATE');
});

