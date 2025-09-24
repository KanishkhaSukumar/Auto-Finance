const {test,expect} = require(`@playwright/test`)
const {login} = require(`../utils/Loginhelper`)
const NewLead = require(`../Pages/NewLead`)
const Oppertunity = require(`../Pages/Createoppertunity`)
test.use({ headless: false }); 
test(`create Oppertunity`,async({page})=>
    {
   await login(page);
  await NewLead(page);
  await Oppertunity(page);

});