import angular from 'angular';

import readResource from '../resource/resource.module';

import CATEGORY     from    './category.constant';
import PreviewCategoryDirective     from    './components/preview-category/preview-category.directive';
import EditableCategoryDirective     from    './components/editable-category/editable-category.directive';
import EditCategoryDirective     from    './components/edit-category/edit-category.directive';
import AddCategoryDirective     from    './components/add-category/add-category.directive';
import ListCategoryDirective    from    './components/list-category/list-category.directive';
import CategoryManagerService   from    './services/category-manager.service';

const category = angular.module('read.category', ['restangular', 'treeControl', readResource]);

category
    .constant('READ_CATEGORY', CATEGORY)
    .service('readCategoryManager', CategoryManagerService)
    .directive('readListCategory', ListCategoryDirective)
    .directive('readEditableCategory', EditableCategoryDirective)
    .directive('readEditCategory', EditCategoryDirective)
    .directive('readPreviewCategory', PreviewCategoryDirective)
    .directive('readAddCategory', AddCategoryDirective);

export default category.name;