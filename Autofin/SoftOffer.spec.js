const { test, expect } = require('@playwright/test');
const { login } = require('../utils/Loginhelper');
const NewLead = require('../Pages/NewLead');
const Oppertunity = require('../Pages/Createoppertunity');
const Personaldetails = require('../Pages/Personaldetails');
const Softoffer = require('../Pages/Softoffer'); // fixed import

test.use({ headless: false });

test('Softoffer', async ({ page }) => {
  await login(page);
  await NewLead(page);
  await Oppertunity(page);
  await Personaldetails(page);
  await Softoffer(page);
});
