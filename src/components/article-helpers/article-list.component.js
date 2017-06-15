import template from './article-list.html'

class ArticleListCtrl {
  constructor(Articles) {
    'ngInject';

    this._Articles = Articles;

    this.setListTo(this.listConfig);
  }

  $onInit() {
    this.runQuery();
  }

  setListTo(newList) {
    this.list = [];
    this.listConfig = newList;
    this.runQuery();
  }

  runQuery() {
    this.loading = true;

    const queryConfig = {
      type: this.listConfig.type,
      filters: this.listConfig.filters || {}
    };

    queryConfig.filters.limit = this.limit;

    this._Articles
      .query(queryConfig)
      .then(
        res => {
          this.loading = false;
          this.list = res.articles;
        }
      );
  }
}

let ArticleList = {
  bindings: {
    limit: '=',
    listConfig: '='
  },
  controller: ArticleListCtrl,
  templateUrl: template
}

export default ArticleList
