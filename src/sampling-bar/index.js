import angular from 'angular'
import SamplingBarConfig from './sampling-bar.config'
import SamplingBarCtrl from './sampling-bar.controller'
import Boundary from './popout/boundary.directive'
import Popout from './popout/popout.component'

const samplingBarModule = angular.module('app.sampling-bar', [])

samplingBarModule.config(SamplingBarConfig)
samplingBarModule.controller('SamplingBarCtrl', SamplingBarCtrl)
samplingBarModule.directive('boundary', Boundary)
samplingBarModule.component('popout', Popout)

export default samplingBarModule
