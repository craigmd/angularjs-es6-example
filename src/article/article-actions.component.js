import template from './article-actions.html'

class ArticleActionsCtrl {
  constructor(Articles, User, $state) {
    'ngInject';

    this._Articles = Articles;
    this._User = User;
    this._$state = $state;
  }

  $onInit(){
    if (this._User.current) {
      this.canModify = (this._User.current.username === this.article.author.username);
    } else {
      this.canModify = false;
    }
  }

  deleteArticle() {
    this.isDeleting = true;
    this._Articles.destory(this.article.slug).then(
      success => this._$state.go('app.home'),
      err => this._$state.go('app.home')
    );
  }
}

const ArticleActions = {
  bindings: {
    article: '='
  },
  controller: ArticleActionsCtrl,
  templateUrl: template
};

export default ArticleActions
