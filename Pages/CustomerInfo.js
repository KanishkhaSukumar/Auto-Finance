const { expect } = require('@playwright/test');
const { login } = require(`../utils/Loginhelper`)
const NewLead = require(`../Pages/NewLead`)
const Createoppertunity = require(`../Pages/Createoppertunity`);
const Personaldetails = require(`../Pages/Personaldetails`)
const Softoffer = require(`../Pages/Softoffer`)

async function CustomerInfo(page) {
  await page.click('//*[@id="list_subpanel_opportunities_ssi_offer_1"]/table/tbody/tr[1]/td[2]');

  //It will select the ACTIONS
  await page.getByRole('link', { name: 'ACTIONS' }).click();
  await page.waitForTimeout(2000);

  //It will select the "SOFTOFFER"
  await page.getByRole('button', { name: 'Customer Info Collected' }).click();

  await page.waitForTimeout(1000);
  // lead id
  await page.fill(`#leads_id`, `testing purpose only`)
  await page.waitForTimeout(1000);

  // Applicant id
  await page.fill(`#applicant_id`, `testing purpose only`)
  await page.waitForTimeout(1000);

  // Application id
  await page.fill(`#application_id`, `testing purpose only`)
  await page.waitForTimeout(1000);

  // Assert id
  await page.fill(`#asset_id`, `testing purpose only`)
  await page.waitForTimeout(1000);

  // Assert id
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(1000);

}
module.exports = CustomerInfo;