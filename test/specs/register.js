const {expect} = require('chai');

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
        element.setValue('Natsu');
        browser.pause(1000)
    });

    it('should fill up Last Name field', () => {
        const element = $('form input[name="lastName"]');
        element.setValue('Dragnil');
        browser.pause(1000)
    });

    it('should fill up phone num field', () => {
        const element = $('form input[name="phone"]');
        element.setValue('89283125861');
        browser.pause(2000)
    });

    it('should fill up email field', () => {
        const element = $('form input[name="email"]');
        element.setValue('natsu_dragnil@gmail.com');
        browser.pause(2000)
    });

    it('should fill up password field', () => {
        const element = $('form input[name="password"]');
        element.setValue('+NanatsuNoTaizai');
        browser.pause(1000)
    });

    it('should fill up about field', () => {
        const element = $('form textarea[name="about"]');
        element.setValue('qwerty asdf zxcv');
        browser.pause(2000)
    });

    it('should fill up My goals field', () => {
        const element = $('form textarea[name="goals"]');
        element.setValue('qwerty asdf zxcv');
        browser.pause(2000)
    });

    it('should choose English level', () => {
        const element = $('form select[name="englishLevel"]');
        element.selectByVisibleText('Elementary');
        browser.pause(2000)
    });


});


        // const expected = 'Submit';
        // expect(actual).equal(expected);



