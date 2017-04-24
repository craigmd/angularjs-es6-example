class User {
  constructor(JWT, AppConstants, $http, $state, $q) {
    'ngInject';

    this._JWT = JWT;
    this._AppConstants = AppConstants;
    this._$http = $http;
    this._$state = $state;
    this._$q = $q;

    this.current = null;
  }

  authAttempt(type, credentials) {
    let route = (type === 'login') ? '/login' : '';

    return this._$http({
      url: this._AppConstants.api + '/users' + route,
      method: 'POST',
      data: {
        user: credentials
      }
    }).then(res => {
        this.current = res.data.user;
        this._JWT.save(res.data.user.token);

        return res;
    });
  }

  verifyAuth() {
    let promise = this._$q(resolve => {
      if (!this._JWT.get()) {
        resolve(false);
        return promise;
      }

      if (this.current) {
        resolve(true);
      } else {
        this._$http({
          url: this._AppConstants.api + '/user',
          method: 'GET'
        }).then(res => {
            this.current = res.data.user;
            resolve(true);
          }, err => {
            this._JWT.destroy();
            resolve(false);
          }
        );
      }
    });

    return promise;
  }

  ensureAuthIs(bool) {
    let promise = this._$q(resolve => {
      this.verifyAuth().then(authValid => {
        if (authValid !== bool) {
          this._$state.go('app.home');
          resolve(false);
        } else {
          resolve(true);
        }
      });

      return promise;
    });
  }

  logout() {
    this.current = null;
    this._JWT.destroy();
    this._$state.reload();
  }
}

export default User

// OLD WAY TO DO PROMISES
// verifyAuth() {
//   let deferred = this._$q.defer();
//
//   if (!this._JWT.get()) {
//     deferred.resolve(false);
//     return deferred.promise;
//   }
//
//   if (this.current) {
//     deferred.resolve(true);
//   } else {
//     this._$http({
//       url: this._AppConstants.api + '/user',
//       method: 'GET',
//       headers: {
//         Authorization: 'Token ' + this._JWT.get()
//       }
//     }).then(
//       (res) => {
//         this.current = res.data.user;
//         deferred.resolve(true);
//       },
//       (err) => {
//         this._JWT.destroy();
//         deferred.resolve(false);
//       }
//     );
//   }
//   console.log(deferred);
//   return deferred.promise;
// }
