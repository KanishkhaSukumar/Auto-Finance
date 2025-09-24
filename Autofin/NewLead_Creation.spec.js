const {test,expect} = require(`@playwright/test`)

const { login } = require('../utils/Loginhelper'); 
const NewLead = require("../Pages/NewLead")
test.use({ headless: false }); 

test(`Creating Lead`, async({page}) => 
     {
     await login(page);
     await NewLead(page);
});