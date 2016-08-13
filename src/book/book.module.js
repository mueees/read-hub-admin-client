import angular from 'angular';

import ListBookDirective from './components/list-book/list-book.directive';
import EditorBookDirective     from    './components/editor-book/editor-book.directive';
import BookManagerService   from    './services/book-manager.service';
import BOOK from './book.constant';

const book = angular.module('read.book', []);

book
    .constant('READ_BOOK', BOOK)
    .service('readBookManager', BookManagerService)
    .directive('readListBook', ListBookDirective)
    .directive('readEditorBook', EditorBookDirective);

export default book.name;