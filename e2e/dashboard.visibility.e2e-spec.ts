import { browser } from 'protractor';
import { DashboardPage } from './dashboard.po';

describe('When navigating to Dashboard page, check if important elements are visible', () => {

    let dashboard : DashboardPage;

    beforeAll(() => {
        dashboard = new DashboardPage();
        dashboard.navigateToDashboard();
    });

    it('should display \'Top Heroes\' header', async () => {
        let title : string = await dashboard.topHeroesHeader();
        expect(title).toEqual("Top Heroes");
    });

    it('should display a Search Box', async () => {
        let visibility : boolean = await dashboard.searchBoxVisibility();
        expect(visibility).toBe(true);
    });

    it('should display all Top Heroes', async () => {
        let heroesVisibility = dashboard.areTopHeroesVisible();
        expect(heroesVisibility).toBe(true);
    });

    it('should have a valid current URL', async () => {
        let currentUrl : string = await browser.getCurrentUrl();
        expect(currentUrl).toBe("http://localhost:4200/dashboard");
    });
});
