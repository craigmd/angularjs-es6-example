import template from './header.html'

class AppHeaderCtrl {
  constructor(AppConstants) {
    'ngInject';

    this.appName = AppConstants.appName;
  }
}

let AppHeader = {
  controller: AppHeaderCtrl,
  templateUrl: template
};

export default AppHeader;
