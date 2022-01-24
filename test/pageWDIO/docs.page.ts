export class docsPage {
    
    get docsButton () {
        return $('a=Docs')
    }

    async clickDocsButton() {
        this.docsButton.click()
    }
}