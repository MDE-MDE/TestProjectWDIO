export class mainPage {

    async browserOpen () {
        await browser.url('https://webdriver.io')
    }

    get searchButton() {
        return $('[aria-label="Search"]').$('.DocSearch-Button-Container')
    }

    async clickSearchButton(){
        await this.searchButton.click()
    }

    get inputSearch(){
        return $('#docsearch-input')
    }
}
