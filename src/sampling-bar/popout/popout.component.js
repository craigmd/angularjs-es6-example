import Popper from 'popper.js'
import template from './popout.html'
import './popout.css'

class PopoutCtrl {
  constructor($scope, $element) {
    'ngInject';

    this.$scope = $scope;
    this.$element = $element;

    this.popoutEl = this.$element[0];
    this.referenceEl = this.$element[0].parentElement;
    this.placement = this.position || 'auto';
    this.modifiers = {
      offset: { offset: '0, 7' },
      preventOverflow: { boundariesElement: 'scrollParent' },
    };

    this.isActive = false;
  }

  $onInit() {
    if (this.boundaryCtrl) {
      this.modifiers.preventOverflow.boundariesElement = this.boundaryCtrl.boundary;
    }

    this.popoutOptions = {
      placement: this.placement,
      modifiers: this.modifiers,
    };
  }

  $postLink() {
    this.parent = this.$element.parent();
    this.originalZIndex = this.parent.css('z-index') || 0;

    this.$element.on(this.showOn || this.toggleOn || 'mouseover focus', (e) =>
      e.stopPropagation());

    if (this.isListening) {
      this.$scope.$on(this.showOn, () => this.show());
      this.$scope.$on(this.hideOn, () => this.hide());
    } else {
      if (this.toggleOn) {
        this.parent.on(this.toggleOn, () => this.isActive ? this.hide() : this.show());
      } else {
        this.parent.on(this.showOn || 'mouseover focus', () => this.show());
        this.parent.on(this.hideOn || 'mouseout blur', () => this.hide());
      }
    }
  }

  show() {
    this.popout = new Popper(
      this.referenceEl,
      this.popoutEl,
      this.popoutOptions
    );

    this.$scope.$applyAsync(() => {
      this.parent.css('z-index', this.originalZIndex + 100);
      this.popout.update();
      this.isActive = true;
    });
  }

  hide() {
    this.$scope.$applyAsync(() => {
      this.isActive = false;
      this.parent.css('z-index', this.originalZIndex);
    });
  }
}

const Popout = {
  bindings: {
    hideOn: '@?',
    isListening: '@?',
    position: '@?',
    showOn: '@?',
    toggleOn: '@?',
  },
  controller: PopoutCtrl,
  require: { boundaryCtrl: '?^boundary' },
  transclude: true,
  templateUrl: template,
};

export default Popout
