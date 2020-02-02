const {expect} = require('chai');

describe('Register page', () => {
    before(()=> {
        browser.url('https://stage.pasv.us/user/register')
    });

    it('should have the right title', () => {
        const actualTitle = browser.getTitle();
        const expectedTitle = 'Progress Monitor';
        expect(actualTitle).equal(expectedTitle);
    });

    it('should have a correct title', ()=>{
        const actualH1Text = $('h1').getText();
        const expectedH1Text = 'User Register';
        expect(actualH1Text).equal(expectedH1Text);
    });



})