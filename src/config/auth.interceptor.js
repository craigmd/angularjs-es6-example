function authInteceptor(JWT, AppConstants, $window, $q) {
  'ngInject';

  return  {
    request: function(config) {
      if (config.url.includes(AppConstants.api) && JWT.get()) {
        config.headers.Authorization = 'Token ' + JWT.get();
      }

      return config;
    },
    responseError: function(rejection) {
      if (rejection.status === 401) {
        JWT.destroy();
        $window.location.reload();
      }

      return $q.reject(rejection);
    }
  }
}

export default authInteceptor
