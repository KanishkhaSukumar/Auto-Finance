const { test, expect } = require(`@playwright/test`)
const { login } = require(`../utils/Loginhelper`)
const NewLead = require(`../Pages/NewLead`)
const Oppertunity = require(`../Pages/Createoppertunity`)
const Personaldetails = require("../Pages/Personaldetails")
const Softoffer = require("../Pages/Softoffer")
const CustomerInfo = require("../Pages/CustomerInfo")
const UploadDocuments = require("../Pages/UploadDocuments")
const FinalOffer = require("../Pages/FinalOffer")
const RtoInitiated = require("../Pages/RtoInitiated")

//const path = require('path');

test.use({ headless: false });

async function UTREntry(page) {

    // 1. Click ACTIONS link
    await page.getByRole('link', { name: 'ACTIONS' }).click();
    await page.waitForTimeout(1000);

    // 2. Click Submit Document button
    await page.getByRole('button', { name: 'Financier Disbursement UTR Entry' }).click();
    await page.waitForTimeout(1000);

    //Enter current do date(today)
    // Click on calendar icon to open the popup
    await page.click('#as_do_date_trigger');

    // Get today’s date (just the day number, e.g. 11)
    const today = new Date().getDate().toString();

    // Select the day inside the calendar table
    await page.locator(`.ui-datepicker-calendar td a >> text=${today}`).click();

    //FILL UTR NUMBER FOR ENTRY
    await page.click('#dis_utr_from_financier_c_dialog', 'UTRVALIDATION1234567')

    //CLICK ON"CONFIRM"
    // 2. Click Submit Document button
    await page.getByRole('button', { name: 'Confirm' }).click();
    //await page.waitForTimeout(1000);

    page.once('dialog', async (dialog) => {
        console.log(dialog.message(`Information captured for Disbursement from financier successfully.`)); // Optional: logs "Are you sure, you have uploaded all necessary documents to lender portal?"
        await dialog.accept(); // Clicks OK
    });



}
module.exports = UTREntry;