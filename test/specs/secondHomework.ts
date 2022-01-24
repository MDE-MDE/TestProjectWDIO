import { apiPage } from "../pageWDIO/api.page";
import { docsPage } from "../pageWDIO/docs.page";
import { mainPage } from "../pageWDIO/main.page";


const MainPage = new mainPage();
const DocsPage = new docsPage();
const APIPage = new apiPage();

describe('Second homework youtube video', () => {
    it('Открытие главной страницы WDIO', async function () {
        await MainPage.browserOpen()
        await expect($('.hero__title')).toBeDisplayed()
        console.log(await $('.hero__title').isDisplayed())
        await expect($('.hero__subtitle')).toHaveText('Next-gen browser and mobile automation test framework for Node.js')
        console.log(await $('.hero__subtitle').getText())
        await MainPage.clickSearchButton()
        await MainPage.inputSearch.setValue('move')
        await expect($('.DocSearch-Dropdown-Container')).toBeDisplayed()
        console.log(await $('.DocSearch-Dropdown-Container').isDisplayed())
        await browser.saveScreenshot('test/screenshots/Modal_input.png')                                                                       
    })

    it('Открытие вкладки DOCS', async function () {
        await MainPage.browserOpen()
        await DocsPage.clickDocsButton()
        await expect($('h1=Getting Started')).toHaveText('Getting Started')
        const tableContent = await $('.table-of-contents__left-border')
        const usingYarn = await tableContent.$('a[href="#using-yarn"]')
        await usingYarn.click()
        await expect($('#using-yarn')).toBeDisplayedInViewport()
        await browser.saveScreenshot('test/screenshots/Using_yarn.png')
    })

    it('Открытие вкладки API', async function () {
        await MainPage.browserOpen()
        await APIPage.clickAPIButton()
        const sauceService = await $('a[href="/docs/sauce-service"]')
        await sauceService.scrollIntoView({block: "center"})
        await expect(sauceService).toBeDisplayedInViewport()
        await browser.saveScreenshot('test/screenshots/Sauce_service.png')
        await sauceService.click()
        console.log(await browser.getTitle())
    })
})