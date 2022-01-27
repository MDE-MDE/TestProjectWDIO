import { OpenPage } from "../../github.pages/open.page"
import { SingUpPage } from "../../github.pages/singUp.page"
import { CareersPage } from "../../github.pages/careers.page"

const BrowserPage = new OpenPage()
const SingUp = new SingUpPage()
const Careers = new CareersPage()

describe('Открытие страницы вакансий и вывод в консоль', () => {
    it('Открытие главной страницы github', async () => {
        await BrowserPage.openPage("https://github.com/")
        expect(browser).toHaveTitle('GitHub: Where the world builds software · GitHub')
        console.log(await browser.getTitle())
    })

    it('Проскролить к футеру', async function(){
        await SingUp.footer.scrollIntoView()
        await expect(SingUp.footer).toBeDisplayedInViewport()
        await browser.saveScreenshot('test/screenshots/footer.png')
    })

    it('Переход на страницу вакансий', async function(){
        await SingUp.clickCareers()
        await expect(Careers.headingText).toHaveText('Come build the home for all developers')
    })

    it('Нажатие на кнопку открытых вакансий', async function() {
        await Careers.clickOpenPositionsBtn()
        await expect(Careers.openPositions).toBeDisplayedInViewport()
    })

    it('Вывод в консоль наименование вакансий', async function() {
        await Careers.outputPositions()
    })
})