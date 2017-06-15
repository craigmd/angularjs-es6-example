class Articles {
  constructor(AppConstants, $http, $q) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;
    this._$q = $q;
  }

  destroy(slug) {
    return this._$http({
      url: this._AppConstants.api + '/articles/' + slug,
      method: 'DELETE'
    });
  }

  favorite(slug) {
    return this._$http({
      url: this._AppConstants.api + '/articles/' + slug + '/favorite',
      method: 'POST'
    });
  }

  unFavorite(slug) {
    return this._$http({
      url: this._AppConstants.api + '/articles/' + slug + '/favorite',
      method: 'DELETE'
    });
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

  // Config object spec:
  //
  // {
  //   type: String [REQUIRED] - Accepts "all", "feed"
  //   filters: Object that serves as a key => value of URL params (i.e. {author:"ericsimons"} )
  // }

  query(config) {
    let request = {
      url: this._AppConstants + '/articles' + ((config.type === 'feed') ? '/feed' : ''),
      method: 'GET',
      params: config.filters ? config.filters : null
    };

    return this._$http(request).then(res => res.data);
  }
}

export default Articles
