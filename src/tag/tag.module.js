import angular from 'angular';

import readResource from '../resource/resource.module';

import AddTagDirective     from    './components/add-tag/add-tag.directive';
import ListTagDirective    from    './components/list-tag/list-tag.directive';
import TagManagerService   from    './services/tag-manager.service';

const tag = angular.module('read.tag', ['restangular', readResource]);

tag
    .service('readTagManager', TagManagerService)
    .directive('readListTag', ListTagDirective)
    .directive('readAddTag', AddTagDirective);

export default tag.name;