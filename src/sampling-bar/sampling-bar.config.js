import template from './sampling-bar.html'

function SamplingBarConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.sampling-bar', {
    url: '/sampling-bar',
    controller: 'SamplingBarCtrl',
    controllerAs: '$ctrl',
    templateUrl: template
  })
}

export default SamplingBarConfig
