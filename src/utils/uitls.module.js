import angular from 'angular';

import GUIDService from './guid.service'

const utils = angular.module('read.utils', []);

utils
    .service('readGUID', GUIDService);

export default utils.name;