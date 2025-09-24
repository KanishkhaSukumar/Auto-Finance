const { test, expect } = require(`@playwright/test`)
const { login } = require(`../utils/Loginhelper`)
const NewLead = require(`../Pages/NewLead`)
const Oppertunity = require(`../Pages/Createoppertunity`)
const Personaldetails = require("../Pages/Personaldetails")
const Softoffer = require("../Pages/Softoffer")
const CustomerInfo = require("../Pages/CustomerInfo")
const UploadDocuments = require("../Pages/UploadDocuments")
const FinalOffer = require("../Pages/FinalOffer")

const path = require('path');

test.use({ headless: false });

async function RtoInitiated(page) {

    // 1. Click ACTIONS link
    await page.getByRole('link', { name: 'ACTIONS' }).click();
    await page.waitForTimeout(1000);

    // 2. Click Submit Document button
    await page.getByRole('button', { name: 'DO Received & Initiate RC Transfer' }).click();
    await page.waitForTimeout(2000);

    // give the full path of your file (PDF, JPG, etc.)
    const filePath = path.resolve('C:/Users/SKanishkha/Desktop/document test/disbursement.pdf');

    // locate the input field by ID and upload file
    await page.locator('#as_do_upload').setInputFiles(filePath);

    //fill contract number
    await page.fill(`#do_contract_number_c_dialog`, `DO123456789`)

    //Enter current do date(today)
    // Click on calendar icon to open the popup
    await page.click('#as_do_date_trigger');

    // Get today’s date (just the day number, e.g. 11)
    const today = new Date().getDate().toString();

    // Select the day inside the calendar table
    await page.locator(`.ui-datepicker-calendar td a >> text=${today}`).click();

    //select Dealer in a dropdown
    await page.locator('#rto_owner_dialog').selectOption({ index: 1 });  // Dealer

    //select RTO responsibililities
    // Select by index
    await page.locator('#rto_work_type_c_dialog').selectOption({ index: 2 });

    //click on Confirm
    await page.getByRole('button', { name: 'Confirm' }).click();

    page.once('dialog', async (dialog) => {
        console.log(dialog.message(`DO information captured and Initiated for RTO transfer successfully.`)); // Optional: logs "Are you sure, you have uploaded all necessary documents to lender portal?"
        await dialog.accept(); // Clicks OK
    });



}
module.exports = RtoInitiated;