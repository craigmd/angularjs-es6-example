import angular from 'angular';
import ArticleCtrl from './article.controller';
import ArticleConfig from './article.config';
import ArticleActions from './article-actions.component'

// Create the module where our functionality can attach to
let articleModule = angular.module('app.article', []);

// Include our UI-Router config settings
articleModule.config(ArticleConfig);

// Controllers
articleModule.controller('ArticleCtrl', ArticleCtrl);

// Components
articleModule.component('articleActions', ArticleActions);

export default articleModule;
