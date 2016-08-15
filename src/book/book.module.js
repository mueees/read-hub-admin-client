import angular from 'angular';

import ListBookDirective from './components/list-book/list-book.directive';
import EditorBookDirective     from    './components/editor-book/editor-book.directive';
import FilterBookDirective     from    './components/filter-book/filter-book.directive';
import BookManagerService   from    './services/book-manager.service';
import BOOK from './book.constant';

const book = angular.module('read.book', []);

book
    .constant('READ_BOOK', BOOK)
    .service('readBookManager', BookManagerService)
    .directive('readFilterBook', FilterBookDirective)
    .directive('readListBook', ListBookDirective)
    .directive('readEditorBook', EditorBookDirective);

export default book.name;