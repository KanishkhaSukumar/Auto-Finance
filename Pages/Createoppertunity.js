// mainFlow.test.js
const { test, expect } = require('@playwright/test');

async function Oppertunity(page) {

//await page.locator('div:has(span.suitepicon-module-opportunities):has-text("Opportunities")').click();
await page.getByRole('button', { name: /Opportunities/i }).click();
await page.waitForTimeout(2000);

await page.click('#Opportunities_create_button');
await page.waitForTimeout(2000);

}
module.exports = Oppertunity;
