import template from './profile.html'

function ProfileConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.profile', {
    url: '/profile',
    controller: 'ProfileCtrl',
    controllerAs: '$ctrl',
    templateUrl: template
  });

};

export default ProfileConfig;
