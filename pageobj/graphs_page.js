import Page from './page';

class GraphsPage extends Page {

    // your specific page elements
    get graphsTitle() {
        return $('.block_highlight__title');
    }
    get graphsPagination() {
        return $$('.pagination__item');
    }
    get graphsArticleGrid() {
        return $$('div.block.block_news_all > div > div');
    }


    //your specific methods
    open(url) {
        super.open(url);
    }

    graphsPaginationClick(i) {
        this.graphsPagination[i].click()
    }


}

export default new GraphsPage();