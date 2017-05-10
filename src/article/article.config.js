import template from './article.html'

function ArticleConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.article', {
    url: '/article/:slug',
    controller: 'ArticleCtrl',
    controllerAs: '$ctrl',
    templateUrl: template,
    title: 'Article',
    resolve: {
      article: function(Articles, $state, $stateParams) {
        return Articles.get($stateParams.slug).then(
          (article) => {
            console.log('%c Article: ', 'color: green', article);
            return article
          },
          err => $state.go('app.home')
        );
      }
    }
  });
};

export default ArticleConfig;
