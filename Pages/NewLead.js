const { expect } = require('@playwright/test');
const Oppertunity = require(`../Pages/Createoppertunity`)

async function NewLead(page) {

  // Step 1: Click "Leads"
  await page.locator('a:has(span.hide-menu:has-text("Leads"))').click();
  await page.waitForTimeout(1000);

  // Step 2: Click "Create Lead"
  await page.getByRole('link', { name: 'Create Lead' }).click();
  await page.waitForTimeout(1000);

  // Step 3: Wait for Create Lead page
  await page.waitForURL(/module=Leads&action=EditView&return_module=Leads&return_action=DetailView/, { timeout: 10000 });

  await page.waitForTimeout(1000);

  // Step 4: Validate Create Lead form visible (like Customer Name or Create button)
  await expect(page.locator('h2.module-title-text')).toHaveText('CREATE');

  //step 5 : entering the details required to create Lead 

  await page.waitForTimeout(500);
  await page.selectOption('#salutation', { label: 'Ms.' });
  await page.waitForTimeout(1000);
  await page.fill(`#first_name`, `kani`);
  await page.waitForTimeout(1000);
  await page.fill(`#last_name`, `finaLTest`);
  await page.waitForTimeout(1000);
  await page.fill(`#customer_email`, `QATester@gmail.com`);
  await page.waitForTimeout(1000);
  await page.fill(`#phone_mobile`, `7193522951`);
  await page.waitForTimeout(1000);

  await page.selectOption('#lead_owner', { label: 'Saptagiri Moters' });
  await page.waitForTimeout(1000);

  //await page.click(`#auth_identity`)
  await page.click(`#btn_register`);
  await page.waitForTimeout(1000);

  try {
    const isSendOtpVisible = await page.locator('#send_otp').isVisible();

    if (isSendOtpVisible) {
      console.log('New lead - OTP flow available');

      // Proceed with OTP flow
      await page.click(`#send_otp`);
      await page.waitForTimeout(1000);
      await page.click(`#btn_sent_link`);
      await page.waitForTimeout(1000);
      await page.fill(`#user_otp`, `158900`);
      await page.waitForTimeout(2000);
      await page.click(`#btn_verify_otp`);
      await page.waitForTimeout(2000);

    }

  } catch (err) {
    console.log('Welcome!You have Registered Already');
    await Oppertunity(page);
  }

}
module.exports = NewLead;