import { browser } from 'protractor';
import { HeroesPage } from './heroes.po';

describe('When navigating to Heroes page, check if important elements are visible', () => {

    let heroesPage : HeroesPage;

    beforeAll(() => {
        heroesPage = new HeroesPage();
        heroesPage.navigateToHeroes();
    });

    it('should display \'My Heroes\' header', async () => {
        let title : string = await heroesPage.myHeroesHeader();
        expect(title).toEqual("My Heroes");
    });

    it('should display list of Heroes', async () => {
        let listVisibility : boolean = await heroesPage.heroesVisibility();
        expect(listVisibility).toBe(true);
    });

    it('should display \'Add New Hero\' button', async () => {
        let btnVisibility : boolean = await heroesPage.addNewHeroButtonVisibility();
        expect(btnVisibility).toBe(true);
    });

    it('should display \'Show/Hide ngFor Features\' button', async () => {
        let btnVisibility : boolean = await heroesPage.ngForFeaturesButtonVisibility();
        expect(btnVisibility).toBe(true);
    });

    it('should have a valid current URL', async () => {
        let currentUrl : string = await browser.getCurrentUrl();
        expect(currentUrl).toBe("http://localhost:4200/heroes");
    });

});