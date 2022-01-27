import { CreateAccountPage } from "../../github.pages/createAccount.page";
import { EnterprisePage } from "../../github.pages/enterprise.page";
import { NavMenuHeader } from "../../github.pages/navMenu.header";
import { OpenPage } from "../../github.pages/open.page";
import { RandomValue } from "../../github.pages/random.value";

const BrowserPage = new OpenPage()
const CreateAccount = new CreateAccountPage()
const Rand = new RandomValue()
const NavMenu = new NavMenuHeader()
const Enterprise = new EnterprisePage()

describe('Открытие страницы Enterprise и заполнение формы регистрации', ()=>{
    it('Открытие главной страницы github', async () => {
        await BrowserPage.openPage("https://github.com/")
        expect(browser).toHaveTitle('GitHub: Where the world builds software · GitHub')
        console.log(await browser.getTitle())
    })

    it('Нажатие на кнопку Enterprice', async function(){
        await NavMenu.clickEnterpriseBtn()
        await expect(browser).toHaveUrlContaining('/enterprise')
    })

    it('Нажатие на кнопку Start a free trial', async function(){
        await Enterprise.clickStartFreeBtn()
        await expect(Enterprise.heading).toHaveText('Pick your trial plan')
    })

    it('Нажатие на кнопку Enterprise cloud', async function(){
        await Enterprise.clickEnterpriseCloud()
        await expect(CreateAccount.heading).toHaveText('Create your account')
    })

    it('Вставка случайного имени', async function(){
        let username = Rand.userName('CrAcc')
        await CreateAccount.username.setValue(username)
        console.log("Username: " + await CreateAccount.username.getValue())
        await CreateAccount.username.click()
        await expect(CreateAccount.success).toBeDisplayed()
    })

    it('Вставка случайной почты', async function(){
        let email = Rand.emailName('Test')
        await CreateAccount.email.setValue(email)
        console.log("Email: " + await CreateAccount.email.getValue())
    })

    it('Вставка случайного пароля', async function(){
        let password = Rand.password()
        await CreateAccount.password.setValue(password)
        console.log("Password: " + await CreateAccount.password.getValue())
    })

    it('Подписка на рассылки', async function(){
        await CreateAccount.clickEmailPreferences()
        await expect(CreateAccount.emailPreferences).toBeSelected()
    })

    it('Возврат на предыдущую страницу', async function(){
        await Enterprise.windowsHistoryBack()
        await expect(Enterprise.heading).toHaveText('Pick your trial plan')
    })

    it('Нажатие на кнопку Enterprise server', async function(){
        await Enterprise.clickEnterpriseServer()
        await expect(Enterprise.headingEnterpriseServer).toHaveText('Start your 45-day free trial of Enterprise Server')
    })

    it('Вставка случайного имени', async function(){
        let username = Rand.userName('Enterprise')
        await Enterprise.name.setValue(username)
        console.log("Username: " + await Enterprise.name.getValue())
    })

    it('Вставка случайной компании', async function(){
        let company = Rand.company()
        await Enterprise.company.setValue(company)
        console.log("Company: " + await Enterprise.company.getValue())
    })

    it('Вставка случайной почты', async function(){
        let email = Rand.emailName('Test')
        await Enterprise.email.setValue(email)
        console.log("Email: " + await Enterprise.email.getValue())
    })

    it('Вставка случайного телефона', async function(){
        let phone = Rand.phoneNumber()
        await Enterprise.phone.setValue(phone)
        console.log("Phone: " + await Enterprise.phone.getValue())
    })

    it('Выбор случайного типа установки', async function(){
        await Enterprise.randomChooseInstall()
        await browser.saveScreenshot('test/screenshots/chooseInstallationType.png')
    })

    it('Нажатие на чекбокс выбора дополнительных вопросов', async function(){
        await Enterprise.clickYesQuestions()
        await expect(Enterprise.questinList).toBeDisplayed()
    })

    it('Вставка случайного теста в поле ввода вопросов', async function(){
        await Enterprise.questinList.setValue(Rand.answerQuestion())
    })

    it('Принятие пользовательского соглашения', async function(){
        await Enterprise.clickAcceptTerms()
        await expect(Enterprise.acceptTerms).toBeSelected()
    })
})