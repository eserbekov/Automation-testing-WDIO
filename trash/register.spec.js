const {expect} = require('chai');

const {URL_REGISTER, URL_LOGIN, userRegister, pageRegister, pageRegisterSelectors, pageLoginSelectors, userLogin, pageLogin, pageConfirmationSelectors, pageConfirmation} = require('./register_data');

describe('Register page', () => {

    it('should have the right title', () => {
        browser.url(URL_REGISTER);
        const actualTitle = browser.getTitle();
        const expectedTitle = pageRegister.title;
        expect(actualTitle).equal(expectedTitle);
    });

    it('should have a correct title', () => {
        const actualH1Text = $(pageRegisterSelectors.h1).getText();
        const expectedH1Text = pageRegister.h1;
        expect(actualH1Text).equal(expectedH1Text);
    });

    it('should have a correct description', () => {
        const actual = $(pageRegisterSelectors.description).getText();
        const expected = pageRegister.desc;
        expect(actual).equal(expected);

    });

    it('should have a correct submit button text', () => {
        const actual = $(pageRegisterSelectors.submitButton).getText();
        const expected = pageRegister.buttonText;
        expect(actual).equal(expected);
    });

    it('should fill up First Name field', () => {
        const element = $(pageRegisterSelectors.firstNameInput);
        element.setValue(userRegister.firstName);
    });

    it('should fill up Last Name field', () => {
        const element = $(pageRegisterSelectors.lastNameInput);
        element.setValue(userRegister.lastName);
    });

    it('should fill up phone num field', () => {
        const element = $(pageRegisterSelectors.phoneNumberInput);
        element.setValue(userRegister.phone);
    });

    it('should fill up email field', () => {
        const element = $(pageRegisterSelectors.emailInput);
        element.setValue(userRegister.email);
    });

    it('should fill up password field', () => {
        const element = $(pageRegisterSelectors.passwordInput);
        element.setValue(userRegister.password);
    });

    it('should fill up about field', () => {
        const element = $(pageRegisterSelectors.aboutInput);
        element.setValue(userRegister.about);
    });

    it('should fill up My goals field', () => {
        const element = $(pageRegisterSelectors.goalsInput);
        element.setValue(userRegister.goals);
    });

    it('should choose English level', () => {
        const element = $(pageRegisterSelectors.englishLevelInput);
        element.selectByVisibleText(userRegister.lang);
    });

    it('should choose click button', () => {
        const element = $(pageRegisterSelectors.clickButton);
        element.click();
        browser.pause(2000);
    });

});

describe('User Login page', () => {

    it('should have the right title Login', () => {
        browser.url(URL_LOGIN);
        const actualTitle = browser.getTitle();
        const expectedTitle = pageLogin.title;
        expect(actualTitle).equal(expectedTitle);
    });

    it('should have a correct title User Login', () => {
        const actualUser = $(pageLoginSelectors.h1).getText();
        const expectedUser = pageLogin.h1;
        expect(actualUser).equal(expectedUser);
    });

    it('should have a correct submit button text', () => {
        const actual = $(pageLoginSelectors.submitButton).getText();
        const expected = pageLogin.buttonText;
        expect(actual).equal(expected);
    });

    it('should fill up email field User Login', () => {
        const element = $(pageLoginSelectors.emailInput);
        element.setValue(userLogin.email);
    });

    it('should fill up password field User Login', () => {
        const element = $(pageLoginSelectors.passwordInput);
        element.setValue(userLogin.password);
    });

    it('should choose click button Login', () => {
        const element = $(pageLoginSelectors.clickButton);
        element.click();
        browser.pause(2000);
    });

});

describe('Confirmation registor page', () => {

    it('should have a correct title profile page', () => {
        const actual = $(pageConfirmationSelectors.h1).getText();
        const expected = pageConfirmation.h1;
        expect(actual).equal(expected);
        browser.pause(2000);
    });

});

