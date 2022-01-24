export class ExploreGitHubPage{
    get tabs(){
        return $('[role="navigation"]')
    }

    get topics () {
        return this.tabs.$('a[href="/topics"]')
    }

    async clickTopics(){
        await this.topics.click()
    }

    get h1(){
        return $('.h1')
    }
}