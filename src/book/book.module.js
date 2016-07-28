import angular from 'angular';

import AddBookDirective     from    './components/add-book/add-book.directive';
import BookManagerService   from    './services/book-manager.service';

const book = angular.module('read.book', []);

book
    .service('readBookManager', BookManagerService)
    .directive('readAddBook', AddBookDirective);

export default book.name;