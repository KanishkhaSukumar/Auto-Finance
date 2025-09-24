const { expect } = require('@playwright/test');
const { login } = require(`../utils/Loginhelper`)
const NewLead = require(`../Pages/NewLead`)
const Oppertunity = require(`../Pages/Createoppertunity`);



async function Personaldetails(page) {

  //vehicle number
  await page.selectOption('#opp_stock', { label: 'KA38A3380' });
  //await page.waitForTimeout(2000);

  //Ownership
  await page.selectOption('#owners', { label: '2' });

  //make
  await page.waitForSelector('#make', { state: 'visible' });
  await page.selectOption('#make', { label: 'AUDI' });
  //await page.waitForTimeout(2000);

  await page.waitForFunction(() => {
    const model = document.querySelector('#model');
    return model && model.options.length > 1;
  }, { timeout: 10000 });

  // 3. Select model 
  const modelValue = await page.locator('#model option').nth(1).getAttribute('value');
  await page.selectOption('#model', modelValue);

  // 4. Wait for variant 
  await page.waitForFunction(() => {
    const variant = document.querySelector('#variant');
    return variant && variant.options.length > 1;
  }, { timeout: 10000 });

  const variantValue = await page.locator('#variant option').nth(1).getAttribute('value');
  await page.selectOption('#variant', variantValue);

  //insurance inclued
  await page.selectOption('#is_insurance_amount_included', { label: 'No' });

  //scrolling screen
  await page.evaluate(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  });
  //dob
  await page.fill(`#kyc_dob`, `09-07-1990`);

  //pancard
  await page.fill(`#kyc_pan_card`, `ABPCE1102A`);

  //Adhare card
  await page.fill(`#kyc_adhar_card_ref`, `972626728928`);

  //employement type
  await page.selectOption('#kyc_employment_type', { label: 'Salaried' });


  // salary bank 
  await page.click('#kyc_salary_bank');
  await page.fill('#kyc_salary_bank', '');
  //await page.waitForTimeout(1000);
  await page.type('#kyc_salary_bank', 'HDFC', { delay: 150 });
  await page.locator('text=/HDFC/i').first().click();

  //Residence type
  await page.selectOption('#kyc_residence_type', { label: 'Own House' });


  // Residence year
  await page.waitForSelector('#kyc_years_in_residence', { state: 'visible', timeout: 10000 });
  await page.selectOption('#kyc_years_in_residence', { label: '1-2 Years' });

  //Total work experience
  await page.locator('#kyc_total_work_experience').click();
  await page.locator('#kyc_total_work_experience').fill('12');

  await page.fill('#kyc_res_pin_code', '680001'); // or 680020
  //await page.press('#kyc_res_pin_code', 'Enter');
  await page.press('#kyc_res_pin_code', 'Tab');

  await page.waitForFunction(() => {
    const dd = document.querySelector('#kyc_city_of_residence');
    return dd && dd.options.length > 1;
  }, { timeout: 20000 });

  // Click the "City Of Residence" dropdown (XPath)
  await page.click('xpath=//*[@id="detailpanel_1"]/div/div/div[24]/div[2]/span/span[1]/span');

  //Wait for Thrissur option to appear
  await page.waitForSelector('//li[contains(@id,"Thrissur")]', { timeout: 15000 });

  // Click the Thrissur option
  await page.click('//li[contains(@id,"Thrissur")]');

  // Verify Thrissur got selected
  await expect(page.locator('#select2-kyc_city_of_residence-container')).toHaveText(/Thrissur/);
  //await page.waitForTimeout(2000);

  //Net annual Income
  await page.fill(`#kyc_net_annual_income`, `12345566`);
  //await page.waitForTimeout(2000);

  //emi
  await page.selectOption('#kyc_emi', { label: 'No' });

  // Submit the form

//Listen for the confirmation dialog *before* you click Save
page.once('dialog', async dialog => {
  console.log('Dialog message:', dialog.message());
  // choose OK or Cancel
  await dialog.accept();     // or dialog.dismiss();
});

//Click the Save button (first one if there are 2)
await page.locator('#SAVE').first().click();

// //Wait for the form submission / navigation
// await page.waitForLoadState('networkidle', { timeout: 15000 });
//   await page.waitForTimeout(1000);
  
//   page.once('dialog', async dialog => {
//     console.log(`Dialog message: ${dialog.message()}`); // Optional: log the text
//     await dialog.accept(); // Clicks "OK"
//   });
// set up BEFORE clicking Save or any action that pops dialog
page.once('dialog', async dialog => {
  console.log('Dialog message:', dialog.message());
  await dialog.accept();   // accept only once
});
//await page.waitForTimeout(3000);
// then click
//await page.click('#SAVE');
 
  
}

module.exports = Personaldetails;