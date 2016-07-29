import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './category.routes';
import CategoryPageController from './category.controller';

export default angular.module('read.pages.category', [uirouter]).config(routing)
    .controller('CategoryPageController', CategoryPageController)
    .name;