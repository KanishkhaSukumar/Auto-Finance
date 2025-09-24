const {test,expect} = require(`@playwright/test`)
const {login} = require(`../utils/Loginhelper`)
const NewLead = require(`../utils/NewLead`)
const Oppertunity = require(`../utils/Createoppertunity`)
const Personaldetails = require("../utils/Personaldetails")
const Softoffer = require("../utils/Softoffer")
const CustomerInfo = require("../utils/CustomerInfo")
test.use({ headless: false }); 

test(`Personal Details`,async({page})=>
    {
   await login(page);
  await NewLead(page);
  await Oppertunity(page);
 await Personaldetails(page);
 await Softoffer(page);
 await CustomerInfo(page);
 
});
