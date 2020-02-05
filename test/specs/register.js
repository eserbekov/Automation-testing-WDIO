const {expect} = require('chai');
const email = Math.random().toFixed(4) + '@gmail.com';

const URL_register = 'https://stage.pasv.us/user/register';
const URL_login = 'https://stage.pasv.us/user/login';

const user_register = {
    firstName : 'Alexander',
    lastName : 'Pushkin',
    password : '+7NoTaizai',
    phone : '89283125861',
    email,
    about : 'qwerty asdf zxcv',
    goals : 'eat sleep code repeat',
    lang : 'Elementary'
};

const page_register = {
    title : 'Progress Monitor',
    h1 : 'User Register',
    desc : 'Profiles with fictitious or dummy data will be deleted.',
    buttonText : 'Submit',
};

const user_login = {
    password : '+7NoTaizai',
    email
};

const page_login = {
    title : 'Progress Monitor',
    h1 : 'User Login',
    buttonText: 'Login'
};
const page_confirm = {
    h1 : 'You are a new user'
};

describe('Register page', () => {

    it('should have the right title', () => {
        browser.url(URL_register);
        const actualTitle = browser.getTitle();
        const expectedTitle = page_register.title;
        expect(actualTitle).equal(expectedTitle);
    });

    it('should have a correct title', () => {
        const actualH1Text = $('h1').getText();
        const expectedH1Text = page_register.h1;
        expect(actualH1Text).equal(expectedH1Text);
    });

    it('should have a correct description', () => {
        const actual = $('p').getText();
        const expected = page_register.desc;
        expect(actual).equal(expected);

    });

    it('should have a correct submit button text', () => {
        const actual = $('form button').getText();
        const expected = page_register.buttonText;
        expect(actual).equal(expected);
    });

    it('should fill up First Name field', () => {
        const element = $('form input[name="firstName"]');
        element.setValue(user_register.firstName);
        browser.pause(1000);
    });

    it('should fill up Last Name field', () => {
        const element = $('form input[name="lastName"]');
        element.setValue(user_register.lastName);
        browser.pause(1000);
    });

    it('should fill up phone num field', () => {
        const element = $('form input[name="phone"]');
        element.setValue(user_register.phone);
        browser.pause(1000);
    });

    it('should fill up email field', () => {
        const element = $('form input[name="email"]');
        element.setValue(user_register.email);
        browser.pause(1000);
    });

    it('should fill up password field', () => {
        const element = $('form input[name="password"]');
        element.setValue(user_register.password);
        browser.pause(1000);
    });

    it('should fill up about field', () => {
        const element = $('form textarea[name="about"]');
        element.setValue(user_register.about);
        browser.pause(1000);
    });

    it('should fill up My goals field', () => {
        const element = $('form textarea[name="goals"]');
        element.setValue(user_register.goals);
        browser.pause(1000);
    });

    it('should choose English level', () => {
        const element = $('form select[name="englishLevel"]');
        element.selectByVisibleText(user_register.lang);
        browser.pause(1000);
    });

    it('should choose click button', () => {
        const element = $('form button[type="submit"]');
        element.click();
        browser.pause(2000);
    });

});

describe('User Login page', () => {

    it('should have the right title Login', () => {
        browser.url(URL_login);
        const actualTitle = browser.getTitle();
        const expectedTitle = page_login.title;
        expect(actualTitle).equal(expectedTitle);
    });

    it('should have a correct title User Login', () => {
        const actualUser = $('h1').getText();
        const expectedUser = page_login.h1;
        expect(actualUser).equal(expectedUser);
        browser.pause(1000);
    });

    it('should have a correct submit button text', () => {
        const actual = $('form button').getText();
        const expected = page_login.buttonText;
        expect(actual).equal(expected);
    });

    it('should fill up email field User Login', () => {
        const element = $('form input[name="email"]');
        element.setValue(user_login.email);
        browser.pause(1000);
    });

    it('should fill up password field User Login', () => {
        const element = $('form input[name="password"]');
        element.setValue(user_login.password);
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
        const expected = page_confirm.h1;
        expect(actual).equal(expected);
        browser.pause(2000);
    });

});

