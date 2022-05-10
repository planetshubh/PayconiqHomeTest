import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';
import { CREDENTIALS, PASSWORD, PAGE } from '../data/Constants';
import { MESSAGES } from '../data/Messages';

fixture('Login feature testing')
    .page(PAGE) 
    .beforeEach(async t => {
        await t
            .maximizeWindow();  
    });

//  1. Login with valid user
test('User can login with valid credentials', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.SAUCEDEMO_VALID_USERNAME, PASSWORD);
    await t.expect(InventoryPage.pageTitle.exists).ok();
    await t.expect(InventoryPage.pageTitle.innerText).eql('PRODUCTS');
});

// 2. Login with locked out user
test('User can\'t login with locked account', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.INVALID_USER.SAUCEDEMO_LOCKED_USERNAME, PASSWORD);
    await t.expect(LoginPage.errorMessageInvalidCredentials.exists).ok();
    await t.expect(LoginPage.errorMessageInvalidCredentials.innerText).eql(MESSAGES.ERROR_LOCKED_OUT);
});