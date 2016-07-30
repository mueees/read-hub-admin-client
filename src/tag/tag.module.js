import angular from 'angular';

import readResource from '../resource/resource.module';

import AddTagDirective     from    './components/add-tag/add-tag.directive';
import TagManagerService   from    './services/tag-manager.service';

const tag = angular.module('read.tag', ['restangular', readResource]);

tag
    .service('readTagManager', TagManagerService)
    .directive('readAddTag', AddTagDirective);

export default tag.name;