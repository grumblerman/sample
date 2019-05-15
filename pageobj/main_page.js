import Page from './page';

class MainPage extends Page {

    // your specific page elements
    get searchBtn() {
        return $('.icon-search');
    }
    get languageBtn() {
        return $('.options-text');
    }
    get topNewsSliderBnt() {
        return $('div.top-news > div  button.slick-next');
    }
    get searchInput() {
        return $('.search-field');
    }
    get searchResultsNumber() {
        return $('.search-number');
    }
    get mainTitle() {
        return $('.main-logo');
    }


    //your specific methods
    open(url) {
        super.open(url);
    }

    searchClick() {
        this.searchBtn.click();
    }

    searchEnterValue(searchParam) {
        this.searchInput.setValue(searchParam);
    }

    changeLanguage() {
        this.languageBtn.click();
    }

    article(num) {
        return $(`div.jspPane > div:nth-child(1) > div:nth-child(${num})`);
    }

}

export default new MainPage();