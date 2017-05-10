import template from './favorite-btn.html'

class FavoriteBtnCtrl {
  constructor(User, Articles, $state) {
    'ngInject';

    this._User = User;
    this._Articles = Articles;
    this._$state = $state;
  }

  submit() {
    this.isSubmitting = true;

    if (!this._User.current) {
      this._$state.go('app.home');
    }

    if (this.article.favorited) {
      this._Articles.unFavorite(this.article.slug).then(
        () => {
          this.isSubmitting = false;
          this.article.favorited = false;
          this.article.favoritesCount--;
        }
      );
    } else {
      this._Articles.favorite(this.article.slug).then(
        () => {
          this.isSubmitting = false;
          this.article.favorited = true;
          this.article.favoritesCount++;
        }
      );
    }
  }
}

const FavoriteBtn = {
  bindings: {
    article: '='
  },
  controller: FavoriteBtnCtrl,
  templateUrl: template,
  transclude: true
}

export default FavoriteBtn
