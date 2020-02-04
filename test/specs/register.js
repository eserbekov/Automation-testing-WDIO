const {expect} = require('chai');
const firstName = 'Alexander';
const lastName = 'Pushkin';
const email = Math.random() + '@gmail.com';

describe('Register page', () => {
    before(() => {
        browser.url('https://stage.pasv.us/user/register')
    });

    it('should have the right title', () => {
        const actualTitle = browser.getTitle();
        const expectedTitle = 'Progress Monitor';
        expect(actualTitle).equal(expectedTitle);
    });

    it('should have a correct title', () => {
        const actualH1Text = $('h1').getText();
        const expectedH1Text = 'User Register';
        expect(actualH1Text).equal(expectedH1Text);
    });

    it('should have a correct description', () => {
        const actual = $('p').getText();
        const expected = 'Profiles with fictitious or dummy data will be deleted.';
        expect(actual).equal(expected);

    });

    it('should have a correct submit button text', () => {
        const actual = $('form button').getText();
        const expected = 'Submit';
        expect(actual).equal(expected);
    });

    it('should fill up First Name field', () => {
        const element = $('form input[name="firstName"]');
        element.setValue(firstName);
        browser.pause(1000);
    });

    it('should fill up Last Name field', () => {
        const element = $('form input[name="lastName"]');
        element.setValue(lastName);
        browser.pause(1000);
    });

    it('should fill up phone num field', () => {
        const element = $('form input[name="phone"]');
        element.setValue('89283125861');
        browser.pause(1000);
    });

    it('should fill up email field', () => {
        const element = $('form input[name="email"]');
        element.setValue(email);
        browser.pause(1000);
    });

    it('should fill up password field', () => {
        const element = $('form input[name="password"]');
        element.setValue('+7NoTaizai');
        browser.pause(1000);
    });

    it('should fill up about field', () => {
        const element = $('form textarea[name="about"]');
        element.setValue('qwerty asdf zxcv');
        browser.pause(1000);
    });

    it('should fill up My goals field', () => {
        const element = $('form textarea[name="goals"]');
        element.setValue('eat sleep code repeat');
        browser.pause(1000);
    });

    it('should choose English level', () => {
        const element = $('form select[name="englishLevel"]');
        element.selectByVisibleText('Elementary');
        browser.pause(1000);
    });

    it('should choose click button', () => {
        const element = $('form button[type="submit"]');
        element.click();
        browser.pause(2000);
    });

});

describe('User Login page', () => {

    it('should have a correct title User Login', () => {
        const actualUser = $('h1').getText();
        const expectedUser = 'User Login';
        expect(actualUser).equal(expectedUser);
        browser.pause(1000);
    });

    it('should fill up email field User Login', () => {
        const element = $('form input[name="email"]');
        element.setValue(email);
        browser.pause(1000);
    });

    it('should fill up password field User Login', () => {
        const element = $('form input[name="password"]');
        element.setValue('+7NoTaizai');
        browser.pause(1000);
    });

    it('should choose click button Login', () => {
        const element = $('form button[type="submit"]');
        element.click();
        browser.pause(2000);
    });


});

describe('Go to profile page', () => {

    it('should have a correct title profile page', () => {
        const actual = $('h1').getText();
        const expected = 'You are a new user';
        expect(actual).equal(expected);
        browser.pause(2000);
    });


});




        // const expected = 'Submit';
        // expect(actual).equal(expected);



