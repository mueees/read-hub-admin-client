import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './viewport.routes.js';
import ViewportController from './viewport.controller.js';

const viewport = angular.module('read.pages.viewport', [uirouter]);

viewport
    .config(routing)
    .controller('ViewportController', ViewportController);

export default viewport.name;