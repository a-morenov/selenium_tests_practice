const { By } = require("selenium-webdriver");

autorizationLocators = {

pageTitle: By.css("[class*='post-title']"),

loginField: By.id('username'),
passwordField: By.id('password'),
rememberMe: By.css("[class*='woocommerce-form__input-checkbox']"),
submitButton: By.css("[class*='woocommerce-form-login__submit']"),

}

const getAutorize = async (login, password) => {
    await driver.findElement(autorizationLocators.loginField).click();   
    await driver.findElement(autorizationLocators.loginField).sendKeys(login)
    await driver.findElement(autorizationLocators.passwordField).click();
    await driver.findElement(autorizationLocators.passwordField).sendKeys(password)
    await driver.findElement(autorizationLocators.submitButton).click();    

}

registrationLocators = {

registrationButton: By.css("[class*='custom-register-button']"),

login: By.css("input[id*=reg_username]"),
email: By.css("input[id*=reg_email]"),
password:By.css("input[id*=reg_password]"),
confirmButton: By.css("button[name*=register]"),

registrationSuccesMessage: By.css("div[class*=content-page] div"),
registrationErrorMessage: By.css("[role*=alert] li")

}

const getRegister = async (login, email,  password) => {
    await driver.findElement(registrationLocators.login).click();   
    await driver.findElement(registrationLocators.login).sendKeys(login)
    await driver.findElement(registrationLocators.email).click();
    await driver.findElement(registrationLocators.email).sendKeys(email)
    await driver.findElement(registrationLocators.password).click();
    await driver.findElement(registrationLocators.password).sendKeys(password)
    await driver.findElement(registrationLocators.confirmButton).click();    

}

const randomEmail = () => {
var randomEmail = ""; 
var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_"; 

for (var i = 0; i < 10; i++) 
    { randomEmail += characters.charAt(Math.floor(Math.random() * characters.length)); } 
randomEmail += "@test.com";
return randomEmail; 
}

const randomLogin = () => {
    var randomLogin = ""; 
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_"; 
    
    for (var i = 0; i < 6; i++) 
        { randomLogin += characters.charAt(Math.floor(Math.random() * characters.length)); } 
    return randomLogin; 
    }


accountLocators = {

userName: By.css("[class*='woocommerce-MyAccount-content'] strong"),

}

module.exports = {autorizationLocators, getAutorize, registrationLocators, getRegister, accountLocators,randomEmail, randomLogin }