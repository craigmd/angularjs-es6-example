import template from '../layout/app-view.html'
import authInterceptor from './auth.interceptor'

function AppConfig($httpProvider, $stateProvider, $locationProvider, $urlRouterProvider) {
  'ngInject';

  $httpProvider.interceptors.push(authInterceptor);

  /*
    If you don't want hashbang routing, uncomment this line.
    Our tutorial will be using hashbang routing though :)
  */
  // $locationProvider.html5Mode(true);

  $stateProvider
  .state('app', {
    abstract: true,
    templateUrl: template,
    resolve: {
      auth: function(User) {
        return User.verifyAuth();
      }
    }
  });

  $urlRouterProvider.otherwise('/');

}

export default AppConfig;
