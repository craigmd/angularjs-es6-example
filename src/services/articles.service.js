class Articles {
  constructor(AppConstants, $http, $q) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;
    this._$q = $q;
  }

  get(slug) {
    let promise = this._$q((resolve, reject) => {
      if (!slug.replace(" ", "")) {
        reject("Article slug is empty");
        return promise;
      }

      this._$http({
        url: this._AppConstants.api + '/articles/' + slug,
        method: 'GET'
      }).then(
        res => resolve(res.data.article),
        err => reject(err)
      );
    });
    
    return promise;
  }

  save(article) {
    let request = {};

    if (article.slug) {
      request.url = this._AppConstants.api + '/articles/' + article.slug;
      request.method = 'PUT';
      // Delete the slug from the article to ensure the server updates the slug,
      // which happens if the title of the article changed.
      delete article.slug;
    } else {
      request.url = this._AppConstants.api + '/articles';
      request.method = 'POST';
    }

    request.data = { article: article };

    return this._$http(request).then(res => res.data.article);
  }
}

export default Articles
