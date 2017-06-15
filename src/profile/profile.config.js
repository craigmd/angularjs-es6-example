import template from './profile.html'
import templateProfileArticles from './profile-articles.html'

function ProfileConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.profile', {
    abstract: true,
    url: '/@:username',
    controller: 'ProfileCtrl',
    controllerAs: '$ctrl',
    templateUrl: template,
    resolve: {
      profile: function(Profile, $state, $stateParams) {
        return Profile.get($stateParams.username).then(
          profile => profile,
          err => $state.go('app.home')
        );
      }
    }
  })
  .state('app.profile.main', {
    url: '',
    controller: 'ProfileArticlesCtrl',
    controllerAs: '$ctrl',
    templateUrl: templateProfileArticles
  })
  .state('app.profile.favorites', {
    url: '/favorites',
    controller: 'ProfileArticlesCtrl',
    controllerAs: '$ctrl',
    templateUrl: templateProfileArticles
  });
};

export default ProfileConfig;
