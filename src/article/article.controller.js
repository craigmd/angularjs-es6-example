import marked from 'marked'

class ArticleCtrl {
  constructor(article, $sce, $rootScope) {
    'ngInject';

    this.article = article;

    this.article.body = $sce.trustAsHtml(
      marked(this.article.body, { sanitize: true })
    );
  }
}


export default ArticleCtrl;
