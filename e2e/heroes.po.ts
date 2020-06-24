import {element, by} from 'protractor';
import {BlankPage} from "./app.po";

export class HeroesPage extends BlankPage {

    myHeroesHeader() {
        return element(by.css('body > my-root > my-heroes > h2')).getText();
    }

    heroesList() {
        return element(by.css("body > my-root > my-heroes > ul"));
    }

    addNewHeroButton() {
        return element(by.css("body > my-root > my-heroes > button"));
    }

    ngForFeaturesButton() {
        return element(by.css("body > my-root > my-heroes > div > button"));
    }

    addNewHero() {
        return this.addNewHeroButton().click();
    }

    toggleNgForFeatures() {
        return this.ngForFeaturesButton().click();
    }

    heroesVisibility() {
        return this.heroesList().isDisplayed();
    }
    addNewHeroButtonVisibility() {
        return this.addNewHeroButton().isDisplayed();
    }
    ngForFeaturesButtonVisibility() {
        return this.ngForFeaturesButton().isDisplayed();
    }
}