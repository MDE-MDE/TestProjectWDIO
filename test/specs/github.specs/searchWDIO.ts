import { ExploreGitHubPage } from "../../github.pages/exploreGitHub.page";
import { NavMenuHeader } from "../../github.pages/navMenu.header";
import { OpenPage } from "../../github.pages/open.page";
import { SearchPage } from "../../github.pages/search.page";
import { SingUpPage } from "../../github.pages/singUp.page";

const BrowserPage = new OpenPage()
const NavMenu = new NavMenuHeader()
const ExploreGitHub = new ExploreGitHubPage()
const SingUp = new SingUpPage()
const Search = new SearchPage()

describe('Search on the GitHub page', ()=>{
    it('Открытие главной страницы github', async () => {
        await browser.setWindowSize(1280, 720)
        await BrowserPage.openPage("https://github.com/")
        expect(browser).toHaveTitle('GitHub: Where the world builds software · GitHub')
        console.log(await browser.getTitle())
    })

    it('Set value in search input', async function(){
        await NavMenu.searchInput.setValue('webdriverIO')
        await NavMenu.clickSearchBtn()
    })

    it('Select languages in left column', async function(){
        await Search.clickTypeScript()
    })

    it('Click on the first repo', async function(){
        await Search.clickFirstRepo()
        await expect(browser).toHaveUrlContaining('webdriverio')
        await browser.saveScreenshot('test/screenshots/topicsPage.png')
        await browser.pause(5000)
    })
})