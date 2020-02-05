const URL_REGISTER = 'https://stage.pasv.us/user/register';
const URL_LOGIN = 'https://stage.pasv.us/user/login';
const email = Math.random().toFixed(4) + '@gmail.com';

const userRegister = {
    firstName : 'Alexander',
    lastName : 'Pushkin',
    password : '+7NoTaizai',
    phone : '89283125861',
    email,
    about : 'qwerty asdf zxcv',
    goals : 'eat sleep code repeat',
    lang : 'Elementary'
};

const pageRegister = {
    title : 'Progress Monitor',
    h1 : 'User Register',
    desc : 'Profiles with fictitious or dummy data will be deleted.',
    buttonText : 'Submit',
};

const pageRegisterSelectors = {
    h1 : 'h1',
    description : 'p',
    submitButton : 'form button',
    firstNameInput : 'form input[name="firstName"]',
    lastNameInput : 'form input[name="lastName"]',
    phoneNumberInput : 'form input[name="phone"]',
    emailInput : 'form input[name="email"]',
    passwordInput : 'form input[name="password"]',
    abouInput : 'form textarea[name="about"]',
    goalsInput : 'form textarea[name="goals"]',
    englishLevelInput : 'form select[name="englishLevel"]',
    clickButton : 'form button[type="submit"]'
};

const pageLoginSelectors = {
    h1 : 'h1',
    submitButton : 'form button',
    emailInput : 'form input[name="email"]',
    passwordInput : 'form input[name="password"]',
    clickButton : 'form button[type="submit"]'
};

const userLogin = {
    password : '+7NoTaizai',
    email
};

const pageLogin = {
    title : 'Progress Monitor',
    h1 : 'User Login',
    buttonText: 'Login'
};

const pageConfirmationSelectors = {
    h1 : 'h1'
};

const pageConfirmation = {
    h1 : 'You are a new user'
};

module.exports = {URL_REGISTER, URL_LOGIN, userRegister, pageRegister, pageRegisterSelectors, pageLoginSelectors, userLogin, pageLogin, pageConfirmationSelectors, pageConfirmation};