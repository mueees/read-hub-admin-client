import angular from 'angular';
import uirouter from 'angular-ui-router';

import category from '../../category/category.module';

import routing from './category.routes';
import CategoryPageController from './category.controller';

export default angular.module('read.pages.category', [uirouter, category]).config(routing)
    .controller('CategoryPageController', CategoryPageController)
    .name;