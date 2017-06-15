import angular from 'angular';
import ListErrors from './list-errors.component'
import FollowBtn from './buttons/follow-btn.component'
import ArticleMeta from './article-helpers/article-meta.component'
import FavoriteBtn from "./buttons/favorite-btn.component"
import ShowAuthed from './show-authed.directive'
import ArticlePreview from './article-helpers/article-preview.component';
import ArticleList from './article-helpers/article-list.component';

let componentsModule = angular.module('app.components', []);

// Components
componentsModule.component('listErrors', ListErrors);
componentsModule.component('followBtn', FollowBtn);
componentsModule.component('articleMeta', ArticleMeta);
componentsModule.component('favoriteBtn', FavoriteBtn);
componentsModule.component('articlePreview', ArticlePreview);
componentsModule.component('articleList', ArticleList);

// Directives
componentsModule.directive('showAuthed', ShowAuthed);

export default componentsModule;
