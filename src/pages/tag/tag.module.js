import angular from 'angular';
import uirouter from 'angular-ui-router';

import tag from '../../tag/tag.module';

import routing from './tag.routes';
import TagPageController from './tag.controller';

export default angular.module('read.pages.tag', [uirouter, tag]).config(routing)
    .controller('TagPageController', TagPageController)
    .name;