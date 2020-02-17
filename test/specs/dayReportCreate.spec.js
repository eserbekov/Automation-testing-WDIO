const {expect} = require('chai');
//import {expect} from 'chai'
const {URL_LOGIN, URL_DAIRY, userAdmin, pageLoginSelectors,pageDairy, pageDairySelectors} = require('./register_data');

describe('User Login page', () => {

  before('should have the right title Login', () => {
    browser.url(URL_LOGIN);
    $(pageLoginSelectors.emailInput).setValue(userAdmin.email);
    $(pageLoginSelectors.passwordInput).setValue(userAdmin.password);
    $(pageLoginSelectors.clickButton).click();
    browser.pause(5000);
  });

  before('should have a correct title', () => {
    browser.url(URL_DAIRY);
    const actual = $(pageDairySelectors.h1).getText();
    const expected = pageDairy.h1;
    expect(actual).equal(expected);
  });

  it('should have a correct submit button text', () => {
    const actual = $(pageDairySelectors.submitButton).getText();
    const expected = pageDairy.buttonTextSave;
    expect(actual).equal(expected);
  });

  it('should choose Watched lectures field', () => {
    const element = $(pageDairySelectors.inputWatchedLectures);
    element.click();
  });

  it('should choose Read documentation field', () => {
    const element = $(pageDairySelectors.inputReadDocumentation);
    element.click();
  });

  it('should choose What is your morale field', () => {
    const element = $(pageDairySelectors.inputMorale);
    element.selectByVisibleText(pageDairy.morale);
  });

  it('should fill up How many hours did you study field', () => {
    const element = $(pageDairySelectors.inputHours);
    element.setValue(pageDairy.hours);
  });

  it('should fill up How was your day field', () => {
    const element = $(pageDairySelectors.inputHowWasYourDay);
    element.setValue(pageDairy.howWasYourDay);
  });

  it('should choose click button', () => {
    const element = $(pageDairySelectors.clickButton);
    element.click();
    browser.pause(2000);
  });

});
