import { browser, element, by } from 'protractor';

export class BlankPage {
  
    getAppName() {
        return element(by.css('my-root h1')).getText();
    }

    navigateToDashboard() {
        return this.navigateTo('/dashboard');
    }

    navigateToHeroes() {
        return this.navigateTo('/heroes');
    }

    navigateToHeroDetails(id: number) {
        return this.navigateTo('/detail/' + id);
    }

    navigateTo(url: string) {
        return browser.get(url);
    }

    dashboardButton() {
        return element(by.css('body > my-root > nav > a.active'));
    }

    heroesButton() {
        return element(by.css('body > my-root > nav > a:nth-child(2)'));
    }
}
