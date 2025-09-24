const { expect } = require('@playwright/test');
const { login } = require(`../utils/Loginhelper`)
const NewLead = require(`../Pages/NewLead`)
const Createoppertunity = require(`../Pages/Createoppertunity`);
const Personaldetails = require(`../Pages/Personaldetails`);

async function Softoffer(page) {

  //It will select the first oppertunity 
  //await page.locator('xpath=(//table[contains(@class,"subpanel-table")]//tr/td/a)[1]').waitFor({ state: 'visible', timeout: 45000 }); // Increased timeout
  //await page.locator('xpath=(//table[contains(@class,"subpanel-table")]//tr/td/a)[1]').click();

   await page.locator('xpath=(//table[contains(@class,"subpanel-table")]//tr/td/a)[1]').click();
   await page.waitForTimeout(1000);
//  // await page.click('(//table[contains(@class,"subpanel-table")]//tr/td/a)[1]');

  //It will select the ACTIONS
  await page.getByRole('link', { name: 'ACTIONS' }).click();
  await page.waitForTimeout(2000);

  //It will select the "SOFTOFFER"
  await page.getByRole('button', { name: 'Generate Softoffer' }).click();
  await page.waitForTimeout(2000);

  //WE WILL BE ENTERING LOAN AMOUNT
  await page.getByRole('textbox', { name: 'Loan Amount' }).fill('12345');
  await page.waitForTimeout(2000);

  //I have given static bank "AU Small Finance Bank"
  await page.getByRole('radio', { name: 'Cholamandalam' }).check();
  await page.waitForTimeout(2000);

  //Submit
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.waitForTimeout(2000);

  //tenure(Months)
  await page.click(`#so_tenure`);
  await page.fill(`#so_tenure`, `12`);
  await page.waitForTimeout(2000);

  //tenure(Max)   
  await page.click(`#so_max_tenure`);
  await page.fill(`#so_max_tenure`, `12`);
  await page.waitForTimeout(2000);

  //tenure(Interest)
  await page.click(`#so_interest_rate`);
  await page.fill(`#so_interest_rate`, `12`);
  await page.waitForTimeout(2000);

  //SUBMIT SOFTOFFER  
  await page.click(`#SAVE`);
  
  //click on oppertunity
  await page.locator('#subpanel_title_opportunities_ssi_offer_1 div div').click();

  //scrolling screen
  await page.evaluate(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  });

  await page.getByRole('button', { name: /Offer/i }).click();
  await page.waitForTimeout(2000);

  //await page.pause();
}

module.exports = Softoffer;  
