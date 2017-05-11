import angular from 'angular'
import 'angular-data-table'
import TableConfig from './table.config'
import TableCtrl from './table.controller'

const tableModule = angular.module('app.table', ['data-table']);

tableModule.config(TableConfig);

tableModule.controller('TableCtrl', TableCtrl);

export default tableModule
