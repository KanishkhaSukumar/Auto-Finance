const { expect } = require('@playwright/test');

async function login(page) {
  await page.goto('https://qa-autofin.carandbike.com');
  await page.fill('#user_name', 'AFM1');
  await page.fill('#username_password', 'AFM1@2024');
  await page.click('button[type="submit"]');
  await page.waitForURL(/module=SSI_Disbursement&action=index/, { timeout: 10000 });
}

module.exports = { login };
