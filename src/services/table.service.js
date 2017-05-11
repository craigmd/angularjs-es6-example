import data from '../api'

class Table {
  constructor($timeout) {
    'ngInject';

    this._$timeout = $timeout;
  }

  get(ms) {
    return new Promise(resolve => this._$timeout(resolve(data), ms));
  }
}

export default Table
