import template from './article.html'

function ArticleConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.article', {
    url: '/article/:slug',
    controller: 'ArticleCtrl',
    controllerAs: '$ctrl',
    templateUrl: template,
    title: 'Article'
  });

};

export default ArticleConfig;
