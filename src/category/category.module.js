import angular from 'angular';

import readResource from '../resource/resource.module';

import AddCategoryDirective     from    './components/add-category/add-category.directive';
import ListCategoryDirective    from    './components/list-category/list-category.directive';
import CategoryManagerService   from    './services/category-manager.service';

const category = angular.module('read.category', ['restangular', readResource]);

category
    .service('readCategoryManager', CategoryManagerService)
    /*.directive('readListTag', ListTagDirective)*/
    .directive('readAddCategory', AddCategoryDirective);

export default category.name;