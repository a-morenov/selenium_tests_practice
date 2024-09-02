const { pages } = require('../utils/constants/pageUris')
const { mainLocators } = require('../page-objects/main-page')
const { expect } = require('chai');
const { accountLocators, getAutorize, getRegister, randomEmail, randomLogin } = require('../page-objects/account-page');

describe('Autorization tests', async function () {
    it('User can autorize on main page', async function () {
        const login = 'ammorenov'
        const password = 'Qwerty123!'
        await driver.get(pages.main);

        await driver.findElement(mainLocators.loginButton).click();
        expect(await driver.getCurrentUrl()).to.equal(pages.account, "Account page does't open")

        await getAutorize(login, password)

        const actualUser = await driver.findElement(accountLocators.userName).getText()
        expect(actualUser).to.eql(login)

    });

    it('User can register with valid cred', async function () {
        //login is valid and not used
        const login = randomLogin()
        const password = 'Test_password!'

        //Email is valid and not used
        const email = randomEmail()

        await driver.get(pages.register);
        await getRegister(login, email, password)
        let message = await driver.findElement(registrationLocators.registrationSuccesMessage).getText()
        expect(message).to.eql('Регистрация завершена')
    })

    it('User can t register with used login', async function () {
        //login is valid and used
        const login = 'test_login'
        const password = 'Test_password!'

        //Email is valid and not used
        const email = randomEmail()

        await driver.get(pages.register);
        await getRegister(login, email, password)
        let message = await driver.findElement(registrationLocators.registrationErrorMessage).getText()
        expect(message).to.eql('Error: Учетная запись с таким именем пользователя уже зарегистрирована.')
    })

    it('User can t register with used email', async function () {
        //login is valid and not used
        const login = randomLogin()
        const password = 'Test_password!'

        //Email is valid and used
        const email = 'test@test.com'

        await driver.get(pages.register);
        await getRegister(login, email, password)
        let message = await driver.findElement(registrationLocators.registrationErrorMessage).getText()
        expect(message).to.eql('Error: Учетная запись с такой почтой уже зарегистировавана. Пожалуйста авторизуйтесь.')
    })


});