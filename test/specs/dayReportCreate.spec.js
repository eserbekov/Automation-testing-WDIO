const {expect} = require('chai');
const {URL_LOGIN,userAdmin, pageLoginSelectors} = require('./register_data');


describe('User Login page', () => {

    it('should have the right title Login', () => {
        browser.url(URL_LOGIN);
        $(pageLoginSelectors.emailInput).setValue(userAdmin.email);
        $(pageLoginSelectors.passwordInput).setValue(userAdmin.password);
        $(pageLoginSelectors.clickButton).click();
        browser.pause(5000);
    });

});

// describe('Confirmation registor page', () => {
//
//     it('should have a correct title profile page', () => {
//         const actual = $(pageConfirmationSelectors.h1).getText();
//         const expected = pageConfirmation.h1;
//         expect(actual).equal(expected);
//         browser.pause(2000);
//     });
//
// });

