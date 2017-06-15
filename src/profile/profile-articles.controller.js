class ProfileArticlesCtrl {
  constructor(profile, $state) {
    'ngInject';

    this.profile = profile;

    this.profileState = $state.current.name;

    this.listConfig = { type: 'all' };

    if (this.profileState === 'main') {
      this.listConfig.filters = { author: this.profile.username };
      $rootScope.setPageTitle('@' + this.profile.username);
    } else if (this.profileState === 'favorites') {
      this.listConfig.filters = { favorited: this.profile.username };
      $rootScope.setPageTitle(`Articles favorited by ${this.profile.username}`);
    }
  }
}

export default ProfileArticlesCtrl
