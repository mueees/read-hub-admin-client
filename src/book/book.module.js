import angular from 'angular';

import AddBookDirective     from    './components/add-book/add-book.directive';
import BookManagerService   from    './services/book-manager.service';
import BOOK from './book.constant';

const book = angular.module('read.book', []);

book
    .constant('READ_BOOK', BOOK)
    .service('readBookManager', BookManagerService)
    .directive('readAddBook', AddBookDirective);

export default book.name;