class Comments {
  constructor(AppConstants, $http) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;
  }

  add(slug, payload) {
    return this._$http({
      url: this._AppConstants.api + '/articles/' + slug + '/comments',
      method: 'POST',
      data: { comment: { body: payload } }
    }).then(res => res.data.comment);
  }
}

export default Comments
