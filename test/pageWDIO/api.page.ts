export class apiPage {
    
    get apiButton () {
        return $('a=API')
    }

    async clickAPIButton() {
        this.apiButton.click()
    }
}