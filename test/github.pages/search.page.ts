export class SearchPage{
    get leftColumnLang(){
        return $('.filter-list.small').$$('li')
    }

    async clickTypeScript(){
        await this.leftColumnLang[1].click()
    }

    get repoList(){
        return $('.repo-list').$$('li')
    }

    async clickFirstRepo(){
        await this.repoList[0].$('a').click()
    }

    get selectedLang(){
        return $('.selected [aria-hidden="true"]')
    }
}