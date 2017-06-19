function Boundary() {
  return {
    restrict: 'A',
    controller: function($element) {
      'ngInject'

      this.boundary = $element[0]
    }
  }
}

export default Boundary
