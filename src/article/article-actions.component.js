import template from './article-actions.html'

class ArticleActionsCtrl {
  constructor(User) {
    'ngInject';

    this._User = User;
  }

  $onInit(){
    if (this._User.current) {
      this.canModify = (this._User.current.username === this.article.author.username);
    } else {
      this.canModify = false;
    }
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
