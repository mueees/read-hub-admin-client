import {Component, Input} from '@angular/core';

import {Book} from '../../../book.ts';
import {BookManagerService} from '../../book-manager/book-manager.service';

@Component({
    selector: 'book-list',
    template: require('./book-list.component.html')
})
export class BookListComponent {
    constructor(private bookManagerService:BookManagerService) {
    }

    @Input()
    books:Array<Book>;

    onDelete(book) {
        if (confirm("Are you sure?") === true) {
            _.remove(this.books, {
                _id: book._id
            });

            this.bookManagerService.deleteBook(book._id)
                .subscribe(function () {
                    console.error('Bok was deleted');
                }, function () {
                    console.error('Cannot remove book');
                });
        }
    }
}