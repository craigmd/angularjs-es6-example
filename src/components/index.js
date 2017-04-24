import angular from 'angular';
import ListErrors from './list-errors.component'
import ShowAuthed from './show-authed.directive'

let componentsModule = angular.module('app.components', []);

// Components
componentsModule.component('listErrors', ListErrors);

// Directives
componentsModule.directive('showAuthed', ShowAuthed);

export default componentsModule;
