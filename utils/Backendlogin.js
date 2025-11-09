const { expect } = require('@playwright/test');

async function Backendlogin(page) {
  await page.goto('https://qa-autofin.carandbike.com/index.php?module=Users&action=Login');
  await page.fill('#user_name', 'Backend');
  await page.fill('#username_password', 'Backend2024#');
  await page.click('button[type="submit"]');
  await page.waitForURL(/module=SSI_Disbursement&action=index/, { timeout: 10000 });
}

module.exports = { Backendlogin };
