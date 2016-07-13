import {Component, Output, EventEmitter, Input} from '@angular/core';

import {Book} from '../../../book.ts';
import {BookManagerService} from '../../book-manager/book-manager.service';

@Component({
    selector: 'edit-book',
    template: require('./edit-book.component.html')
})
export class EditBookComponent {
    @Output() notify:EventEmitter<Book> = new EventEmitter();
    @Output() cancel:EventEmitter<void> = new EventEmitter();

    @Input()
        book:Book;

    private bindingList = ['soft', 'hard'];
    private languageList = ['en', 'ru', 'ua'];

    constructor(private bookManagerService:BookManagerService) {

    }

    addAuthor() {
        this.book.authors.push({
            name: ''
        });
    }

    deleteAuthor(author) {
        _.remove(this.book.authors, {
            name: author.name
        });
    }

    addQuote() {
        this.book.quotes.push({
            text: ''
        });
    }

    deleteQuote(quote) {
        _.remove(this.book.quotes, {
            text: quote.text
        });
    }

    onSave() {
        var me = this;

        this.bookManagerService.editBook(this.book)
            .subscribe(function () {
                me.notify.emit(me.book);
            }, function () {
                console.log('Cannot edit book');
            });
    }

    onCancel() {
        this.cancel.emit();
    }
}