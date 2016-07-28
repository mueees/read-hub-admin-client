'use strict';

import angular from 'angular';

import uirouter from 'angular-ui-router';

import routing from './app.config';

import home from './features/home';

angular.module('read-app', [uirouter, home])
    .config(routing);