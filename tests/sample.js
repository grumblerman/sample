import {
    expect,
    assert,
    should
} from 'chai';
import MainPage from '../pageobj/main_page';

describe('Testing main page', () => {
    it('should search selected value', () => {
        MainPage.open('');
        MainPage.searchClick();
        MainPage.searchEnterValue('Свинарчук');
        browser.keys('Enter');
        assert.notEqual(browser.getUrl(), 'https://www.pravda.com.ua', "Url should not match!");
        assert.include(MainPage.searchResultsNumber.getText(), 'За вашим запитом знайдено', "!!");
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
    });
});