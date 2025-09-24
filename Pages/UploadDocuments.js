const { expect } = require('@playwright/test');
const { login } = require(`../utils/Loginhelper`)
const NewLead = require(`../Pages/NewLead`)
const Createoppertunity = require(`../Pages/Createoppertunity`);
const Personaldetails = require(`../Pages/Personaldetails`)
const Softoffer = require(`../Pages/Softoffer`)
const CustomerInfo = require(`../Pages/Softoffer`)

//const { expect } = require('@playwright/test');
// 11. Upload file
const path = require('path');

async function UploadDocuments(page) {

    // 1. Click ACTIONS link
    await page.getByRole('link', { name: 'ACTIONS' }).click();
    await page.waitForTimeout(1000);

    // 2. Click Submit Document button
    await page.getByRole('button', { name:'Submit Document' }).click();
    await page.waitForTimeout(3000);

    // 3. Navigate back to Opportunity
    await page.locator('#opportunities_ssi_offer_1opportunities_ida').click();
    await page.waitForTimeout(2000);

    // 4. Navigate back to Lead
    await page.locator('#leads_opportunities_1leads_ida').click();
    await page.waitForTimeout(2000);

    // 5. Scroll down
    await page.evaluate(() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });

    // 6. Click on KYC (robust locator)
    await page.locator('#subpanel_title_ssi_kyc_leads').click();
    await page.waitForTimeout(1000);

    // 7. Click on KYC First link
    await page.locator('table tbody tr td:nth-child(2) a[href*="module=SSI_KYC"]').first().click();
    await page.waitForTimeout(3000);

    ////FIRST TIME UPLOAD FILE

    // 5. Scroll down
    await page.evaluate(() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });

    //click on Documents
    await page.getByRole('button', { name: 'Document' }).click();

    // 8. Click on Create button
    //await page.locator('div', { hasText: 'Documents' }).click();

    await page.locator('#Documents_create_button').click();
    await page.waitForTimeout(1000);

    // 9. Select category
    await page.locator('#category_id').selectOption('identity');

    // 10. Select template type
    await page.locator('#template_type').selectOption('identity_pan');

    // Adjust the relative path based on where your script is
    const panfiPath = path.resolve('C:/Users/SKanishkha/Desktop/document test/Pan.jpg');

    await page.getByRole('button', { name: 'Choose File' }).setInputFiles(panfiPath);

    //save pan file
    await page.click(`#SAVE`)
    await page.waitForTimeout(1000);

    ////2ND TIME FILE UPLOAD

    // 5. Scroll down
    await page.evaluate(() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });

    //click on Documents
    //await page.getByRole('button', { name: 'Document' }).click();

    // 8. Click on Create button
    //await page.locator('div', { hasText: 'Documents' }).click();

    await page.locator('#Documents_create_button').click();
    await page.waitForTimeout(1000);

    // 9. Select category
    await page.locator('#category_id').selectOption('identity');

    // 10. Select template type
    await page.locator('#template_type').selectOption('identity_aadhar_front');

    // Adjust the relative path based on where your script is
    const adharefrontPath = path.resolve('C:/Users/SKanishkha/Desktop/document test/adhare front.jpg');

    await page.getByRole('button', { name: 'Choose File' }).setInputFiles(adharefrontPath);

    //save pan file
    await page.click(`#SAVE`)
    await page.waitForTimeout(1000);
    //3RD TIME FILE UPLOAD

    // 5. Scroll down
    await page.evaluate(() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });

    //click on Documents
    //await page.getByRole('button', { name: 'Document' }).click();

    // 8. Click on Create button
    //await page.locator('div', { hasText: 'Documents' }).click();

    await page.locator('#Documents_create_button').click();
    await page.waitForTimeout(3000);

    // 9. Select category
    await page.locator('#category_id').selectOption('identity');
    
    // 10. Select template type
    await page.locator('#template_type').selectOption('identity_aadhar_back');


    // Adjust the relative path based on where your script is
    const adharebackPath = path.resolve('C:/Users/SKanishkha/Desktop/document test/adhare back.jpg');

    await page.getByRole('button', { name: 'Choose File' }).setInputFiles(adharebackPath);

    //save pan file
    await page.click(`#SAVE`)
    await page.waitForTimeout(1000);

    //click on lead back to uploaddocument section
    await page.click('#ssi_kyc_leadsleads_idb');
    await page.waitForTimeout(1000);
    //click on oppertunity 
    await page.click('xpath=//*[@id="list_subpanel_leads_opportunities_1"]/table/tbody/tr[1]/td[2]/a');
    await page.waitForTimeout(1000);
    // 5. Scroll down
    await page.evaluate(() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });

   // Wait for the panel header link
    // const panelHeader = page.locator('#subpanel_title_opportunities_ssi_offer_1');
    // await panelHeader.waitFor({ state: 'visible', timeout: 10000 });
//await page.locator('a:has-text("Offer")').click({ force: true });
  //await page.locator('/html/body/div[3]/div[2]/div[1]/ul/li[1]/div/div[1]/a/div').click();
await page.locator('xpath=/html/body/div[3]/div[2]/div[1]/ul/li[1]/div/div[1]/a/div').click();

    //click on softoffer
    await page.locator('table tbody tr td:nth-child(2) a').first().click();
   // await page.waitForTimeout(2000);

    // 1. Click ACTIONS link
    await page.getByRole('link', { name:'ACTIONS' }).click();
    await page.waitForTimeout(1000);

    // 2. Click Submit Document button
    await page.getByRole('button', { name: 'Submit Document'}).click();
    await page.waitForTimeout(2000);

    page.once('dialog', async (dialog) => {
        console.log(dialog.message()); // Optional: logs "Are you sure, you have uploaded all necessary documents to lender portal?"
        await dialog.accept(); // Clicks OK
    });


   // await page.pause();


}

module.exports = UploadDocuments;
