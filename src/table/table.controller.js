import './table.css'

class TableCtrl {
  constructor(data, $scope) {
    'ngInject';

    this.data = data;
    this._$scope = $scope;
  }

  $onInit() {
    this.options = {
      rowHeight: 50,
      headerHeight: 50,
      scrollbarV: true,
      reorderable: false,
      columns: this.getColumns()
    };
  }

  getColumns() {
    const columnsDup = this.data.reduce((acc, val) => acc.concat(Object.keys(val)), []);
    const columns = Array.from(new Set(columnsDup));

    return columns.map(column => ({
      name: 'col_' + column,
      prop: column,
      sortable: false,
    }));
  }
}



export default TableCtrl
