import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './login.routes';
import LoginController from './login.controller';

const login = angular.module('read.pages.login', [uirouter]);

login
    .config(routing)
    .controller('LoginController', LoginController);

export default login.name;