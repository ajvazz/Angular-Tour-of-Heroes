import { BlankPage } from './app.po';

describe('When starting the App, check if name is displayed', () => {
    let page: BlankPage;

    beforeEach(() => {
        page = new BlankPage();
    });

    it('should display message saying app works', () => {
        page.navigateToDashboard();
        expect(page.getAppName()).toEqual('Tour of Heroes');
    });
});
