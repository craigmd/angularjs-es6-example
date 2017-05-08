import template from './editor.html'
import * as resolves from './resolve'

function EditorConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('app.editor', {
      url: '/editor/:slug',
      controller: 'EditorCtrl',
      controllerAs: '$ctrl',
      templateUrl: template,
      title: 'Editor',
      resolve: {
        auth: resolves.auth,
        article: resolves.article
      }
    });
}

export default EditorConfig
