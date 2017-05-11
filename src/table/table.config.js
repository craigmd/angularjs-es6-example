import template from './table.html'

function TableConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.table', {
    url: '/table',
    controller: 'TableCtrl',
    controllerAs: '$ctrl',
    templateUrl: template,
    resolve: {
      data: function(Table, $timeout) {
        return Table.get(500).then(data => data);
      }
    }
  });
}

export default TableConfig
