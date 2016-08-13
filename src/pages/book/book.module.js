import angular from 'angular';
import uirouter from 'angular-ui-router';

import book from '../../book/book.module';

import routing from './book.routes';
import BookController from './book.controller';
import AddBookController from './add-book.controller';
import EditBookController from './edit-book.controller';
import ListBookController from './list-book.controller';

const pageBook = angular.module('read.pages.book', [uirouter, book]);

pageBook
    .config(routing)
    .controller('BookController', BookController)
    .controller('ListBookController', ListBookController)
    .controller('EditBookController', EditBookController)
    .controller('AddBookController', AddBookController);

export default pageBook.name;