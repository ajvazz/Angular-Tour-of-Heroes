import {element, by} from 'protractor';
import {BlankPage} from "./app.po";

export class DashboardPage extends BlankPage {

    searchBox() {
        return element(by.id("search-box"));
    }

    topHeroesHeader() {
        return element(by.css('my-root h3')).getText();
    }

    searchHero(hero: string) {
        return this.searchBox().sendKeys(hero);
    }

    searchBoxVisibility() {
        return this.searchBox().isDisplayed();
    }

    async areTopHeroesVisible() {
        let hero1 : boolean = await this.topHero1().isDisplayed();
        let hero2 : boolean = await this.topHero2().isDisplayed();
        let hero3 : boolean = await this.topHero3().isDisplayed();
        let hero4 : boolean = await this.topHero4().isDisplayed();
        return (hero1 && hero2 && hero3 && hero4);
    }

    topHero1() { return element(by.css("body > my-root > my-dashboard > div > div:nth-child(1) > div")); }
    topHero2() { return element(by.css("body > my-root > my-dashboard > div > div:nth-child(2) > div")); }
    topHero3() { return element(by.css("body > my-root > my-dashboard > div > div:nth-child(3) > div")); }
    topHero4() { return element(by.css("body > my-root > my-dashboard > div > div:nth-child(4) > div")); }
}