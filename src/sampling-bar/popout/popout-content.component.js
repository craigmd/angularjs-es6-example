import Popper from 'popper.js'
import template from './popout-content.html'
import './popout-content.css'

class PopoutContentCtrl {
  constructor($scope, $element) {
    'ngInject'

    this.$scope = $scope
    this.$element = $element

    this.reference = this.$element[0].parentElement
    this.popper = this.$element[0]

    this.placement = 'auto'
    this.modifiers = {
      offset: { offset: '0, 7' },
      preventOverflow: { boundariesElement: 'scrollParent' }
    }

    this.isParentHovered = false
  }

  $onInit() {
    this.modifiers.preventOverflow.boundariesElement = this.boundaryCtrl.boundary

    this.popperOptions = {
      placement: this.placement,
      modifiers: this.modifiers
    }

    this.popoutContent = new Popper(
      this.reference,
      this.popper,
      this.popperOptions
    )
  }

  $postLink() {
    this.$element.parent().on('mouseover', () => {
      this.$scope.$applyAsync(() => {
        this.isParentHovered = true
        this.popoutContent.update()
      })
    })

    this.$element.parent().on('mouseout', () => {
      this.$scope.$applyAsync(() => {
        this.isParentHovered = false
      })
    })
  }

}

const PopoutContent = {
  controller: PopoutContentCtrl,
  require: {
    boundaryCtrl: '^boundary'
  },
  transclude: true,
  templateUrl: template
}

export default PopoutContent
