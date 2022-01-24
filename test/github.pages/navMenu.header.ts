export class NavMenuHeader{
    get navHeader(){
        return $('nav[aria-label="Global"]')
    }

    get enterpriseBtn(){
        return this.navHeader.$('[href="/enterprise"]')
    }

    async clickEnterpriseBtn(){
        await this.enterpriseBtn.click()
    }

    get summary(){
        return this.navHeader.$$('summary')
    }

    get dropDown(){
        return this.navHeader.$$('.dropdown-menu')
    }

    get pricingPlans(){
        return this.navHeader.$('a[href="/pricing"]')
    }

    async clickPricingPlans(){
        await this.pricingPlans.click()
    }

    get exploreGitHub(){
        return this.navHeader.$('[href="/explore"]')
    }

    async clickExploreGitHub(){
        await this.exploreGitHub.click()
    }

    get searchInput(){
        return $('[data-test-selector="nav-search-input"]')
    }

    get searchBtn(){
        return $('a[data-target-type="Search"]')
    }

    async clickSearchBtn(){
        await this.searchBtn.click()
    }
}