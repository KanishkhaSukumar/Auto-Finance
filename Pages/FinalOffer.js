const { expect } = require('@playwright/test');
const { login } = require(`../utils/Loginhelper`)
const NewLead = require(`../Pages/NewLead`)
const Createoppertunity = require(`../Pages/Createoppertunity`);
const Personaldetails = require(`../Pages/Personaldetails`)
const Softoffer = require(`../Pages/Softoffer`)
const CustomerInfo = require(`../Pages/Softoffer`)
const UploadDocuments = require('../Pages/UploadDocuments');
const Module = require('module');


async function FinalOffer(page) {

    // 1. Click ACTIONS link
    await page.locator('a.dropdown-toggle', { hasText: 'ACTIONS' }).click();
    //await page.getByRole('link', { name: 'ACTIONS' }).click();
    await page.waitForTimeout(1000);

    // 2. Click Submit Document button
    await page.getByRole('button', { name: 'Final Offer Received' }).click();
    await page.waitForTimeout(2000);

    //FILL Processing Fee
    await page.fill('#processing_fee', `1500`);
    await page.waitForTimeout(1000);

    //FILL other fee
    await page.fill('#other_fee', `1000`);
    await page.waitForTimeout(1000);

    //click on "CONFIEM"
    await page.getByRole('button', { name: 'Confirm' }).click();

    page.once('dialog', async (dialog) => {
        console.log(dialog.message(`Hardoffer captured successfully.`)); // Optional: logs "Are you sure, you have uploaded all necessary documents to lender portal?"
        await dialog.accept(); // Clicks OK
    });

    //------------------------------Hard Offer Accepted-------------------------------------
    // 1. Click ACTIONS link
    await page.getByRole('link', { name: 'ACTIONS' }).click();
    await page.waitForTimeout(1000);

    // 2. Click Submit Document button
    await page.getByRole('button', { name: 'Accepted & Agreement Signed' }).click();
    await page.waitForTimeout(1000);
    //click on "CONFIEM"
    await page.getByRole('button', { name: 'Confirm' }).click();

    page.once('dialog', async (dialog) => {
        console.log(dialog.message(`Offer Accept And Agreement Signed successfully`)); // Optional: logs "Are you sure, you have uploaded all necessary documents to lender portal?"
        await dialog.accept(); // Clicks OK
    });

}
module.exports = FinalOffer;
