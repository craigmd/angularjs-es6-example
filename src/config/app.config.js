import template from '../layout/app-view.html'

function AppConfig($httpProvider, $stateProvider, $locationProvider, $urlRouterProvider) {
  'ngInject';

  /*
    If you don't want hashbang routing, uncomment this line.
    Our tutorial will be using hashbang routing though :)
  */
  // $locationProvider.html5Mode(true);

  $stateProvider
  .state('app', {
    abstract: true,
    templateUrl: template
  });

  $urlRouterProvider.otherwise('/');

}

export default AppConfig;
