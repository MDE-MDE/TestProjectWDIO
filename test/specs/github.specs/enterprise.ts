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

describe('MouseHover на выпадающий список Enterprise', ()=>{
    it('Открытие главной страницы github', async () => {
        await browser.setWindowSize(1280, 720)
        await BrowserPage.openPage("https://github.com/")
        expect(browser).toHaveTitle('GitHub: Where the world builds software · GitHub')
        console.log(await browser.getTitle())
    })

    it('Click enterprise menu', async function(){
        await NavMenu.clickEnterpriseBtn()
        await expect(browser).toHaveUrlContaining('/enterprise')
    })

    it('Click start a free trial', async function(){
        await Enterprise.clickStartFreeBtn()
        await expect(Enterprise.heading).toHaveText('Pick your trial plan')
    })

    it('Click enterprise cloud', async function(){
        await Enterprise.clickEnterpriseCloud()
        await expect(CreateAccount.heading).toHaveText('Create your account')
    })

    it('Random username', async function(){
        let username = Rand.userName('CrAcc')
        await CreateAccount.username.setValue(username)
        console.log("Username: " + await CreateAccount.username.getValue())
        //await expect(CreateAccount.success).toHaveTextContaining('is available.')
    })

    it('Random email address', async function(){
        let email = Rand.emailName('Test')
        await CreateAccount.email.setValue(email)
        console.log("Email: " + await CreateAccount.email.getValue())
    })

    it('Random password', async function(){
        let password = Rand.password()
        await CreateAccount.password.setValue(password)
        console.log("Password: " + await CreateAccount.password.getValue())
    })

    it('Click Email preferences', async function(){
        await CreateAccount.clickEmailPreferences()
        
    })

    it('Click browser history back', async function(){
        await Enterprise.windowsHistoryBack()
        await expect(Enterprise.heading).toHaveText('Pick your trial plan')
    })

    it('Click enterprise server', async function(){
        await Enterprise.clickEnterpriseServer()
        await expect(Enterprise.headingEnterpriseServer).toHaveText('Start your 45-day free trial of Enterprise Server')
    })

    it('Random username', async function(){
        let username = Rand.userName('Enterprise')
        await Enterprise.name.setValue(username)
        console.log("Username: " + await Enterprise.name.getValue())
    })

    it('Random company', async function(){
        let company = Rand.company()
        await Enterprise.company.setValue(company)
        console.log("Company: " + await Enterprise.company.getValue())
    })

    it('Random email address', async function(){
        let email = Rand.emailName('Test')
        await Enterprise.email.setValue(email)
        console.log("Email: " + await Enterprise.email.getValue())
    })

    it('Random phone', async function(){
        let phone = Rand.phoneNumber()
        await Enterprise.phone.setValue(phone)
        console.log("Phone: " + await Enterprise.phone.getValue())
    })

    it('Random choose your installation type', async function(){
        await Enterprise.randomChooseInstall()
        await browser.saveScreenshot('test/screenshots/chooseInstallationType.png')
    })

    it('Click yes, there are questions about GitHub Enterprise', async function(){
        await Enterprise.clickYesQuestions()
        await expect(Enterprise.questinList).toBeDisplayed()
    })

    it('Paste text in question list', async function(){
        await Enterprise.questinList.setValue(Rand.answerQuestion())
    })

    it('Accept terms', async function(){
        await Enterprise.clickAcceptTerms()
        await expect(Enterprise.acceptTerms).toBeSelected()
    })
})