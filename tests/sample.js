import {
    expect,
    assert,
    should
} from 'chai';
import MainPage from '../pageobj/main_page';
import GraphsPage from '../pageobj/graphs_page';

describe('Testing Main page', () => {
    it('should search selected value', () => {
        MainPage.open('');
        MainPage.searchClick();
        MainPage.searchEnterValue('Свинарчук');
        browser.keys('Enter');
        assert.notEqual(browser.getUrl(), 'https://www.pravda.com.ua', "Url should not match!");
        assert.include(MainPage.searchResultsNumber.getText(), 'Some text to fail test', "Search results are invalid!");
        // add some more asserts if needed
    });

    it('should cahnge site language', () => {
        MainPage.open('');
        const titleUA = MainPage.mainTitle.getText();
        MainPage.changeLanguage();
        const titleRU = MainPage.mainTitle.getText();
        assert.notEqual(titleUA, titleRU, "Titles should not match!");
    });

    it('should cahnge url after clicking on news title', () => {
        MainPage.article('3').click();
        assert.notEqual(browser.getUrl(), 'https://www.pravda.com.ua', "Url should not match!");
        // add some more asserts if needed
    });
});

describe('Testing Graphics page', () => {
    it('page title shold match to given one', () => {
        MainPage.open('graphs/');
        // add some more asserts if needed
    });

    it('should chnage pagination and url', () => {
        GraphsPage.open('graphs/');
        GraphsPage.graphsPaginationClick('2');
        expect(browser.getUrl()).to.have.string("page_3");
        // add some more asserts if needed
    });

    it('page should got given amount of news', () => {
        const newsGridTiles = GraphsPage.graphsArticleGrid.length;
        assert.equal(newsGridTiles, "12", "News grid should have 12 tiles");
        // add some more asserts if needed
    });
});