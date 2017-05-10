import angular from 'angular';
import ListErrors from './list-errors.component'
import FollowBtn from './buttons/follow-btn.component'
import ArticleMeta from './article-helpers/article-meta.component'
import FavoriteBtn from "./buttons/favorite-btn.component"
import ShowAuthed from './show-authed.directive'

let componentsModule = angular.module('app.components', []);

// Components
componentsModule.component('listErrors', ListErrors);
componentsModule.component('followBtn', FollowBtn);
componentsModule.component('articleMeta', ArticleMeta);
componentsModule.component('favoriteBtn', FavoriteBtn);

// Directives
componentsModule.directive('showAuthed', ShowAuthed);

export default componentsModule;
