import{ expect } from 'chai';
import LoginPage from "./LoginPage";
import ProfilePage from "../profile/ProfilePage";

describe('LOGIN (negative)', () => {
    it('should open login page', () => {
        LoginPage.open();
        browser.pause(3000);
    });

    it('should have correct title', () =>{
        const actual = LoginPage.h1.getText();
        const expected = 'User Login';
        expect(actual).eq(expected);
    });

    it('should fill out email field', () =>{
        LoginPage.email.setValue('admin@test.com');
    });

    it('should fill out password field', () =>{
        LoginPage.password.setValue('+11111');
    });

    it('should submit form', () =>{
        LoginPage.submitButton.click();
        browser.pause(3000);
    });

    it('should chek h1 text', () =>{
        expect(LoginPage.h1.getText()).equal('User Login');
    });

});