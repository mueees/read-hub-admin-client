import angular from 'angular';
import uirouter from 'angular-ui-router';

import book from '../../book/book.module';

import routing from './book.routes';
import BookController from './book.controller';

export default angular.module('read.pages.book', [uirouter, book]).config(routing)
    .controller('BookController', BookController)
    .name;