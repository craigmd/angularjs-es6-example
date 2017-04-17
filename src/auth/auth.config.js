import template from './auth.html'

function AuthConfig($stateProvider, $httpProvider) {
  'ngInject';

  $stateProvider

    .state('app.login', {
      url: '/login',
      controller: 'AuthCtrl as $ctrl',
      templateUrl: template,
      title: 'Sign in'
    })

    .state('app.register', {
      url: '/register',
      controller: 'AuthCtrl as $ctrl',
      templateUrl: template,
      title: 'Sign up'
    });
}

export default AuthConfig
