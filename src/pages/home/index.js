import angular from 'angular';
import uirouter from 'angular-ui-router';

import book from '../../book/book.module';

import routing from './home.routes';
import HomeController from './home.controller';

export default angular.module('app.home', [uirouter, book]).config(routing)
    .controller('HomeController', HomeController)
    .name;