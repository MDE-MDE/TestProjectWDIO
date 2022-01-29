import { NavMenuHeader } from "../../github.pages/navMenu.header";
import { OpenPage } from "../../github.pages/open.page";
import { SearchPage } from "../../github.pages/search.page";

const BrowserPage = new OpenPage()
const NavMenu = new NavMenuHeader()
const Search = new SearchPage()

describe('Поиск в GitHub', ()=>{
    it('Открытие главной страницы github', async () => {
        await BrowserPage.openPage("https://github.com/")
        expect(browser).toHaveTitle('GitHub: Where the world builds software · GitHub')
        console.log(await browser.getTitle())
    })

    it('Ввод текста в поле ввода поиска', async () => {
        await NavMenu.searchInput.setValue('webdriverIO')
        await expect(NavMenu.searchResult).toBeDisplayed()
    })

    it('Страница поиска с полученными результатами и выбор языка TypeScript в левой колонке', async () => {
        await NavMenu.clickSearchBtn()
        await Search.clickTypeScript()
        await expect(Search.selectedLang).toBeDisplayed()
    })

    it('Нажатие на первый репозиторий', async () => {
        await Search.clickFirstRepo()
        await expect(browser).toHaveUrlContaining('webdriverio')
        await browser.saveScreenshot('test/screenshots/topicsPage.png')
    })
})