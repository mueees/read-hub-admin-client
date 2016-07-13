import {Component, Output, EventEmitter} from '@angular/core';
import {Book} from '../../../book.ts';
import {BookManagerService} from '../../book-manager/book-manager.service';

@Component({
    selector: 'add-book',
    template: require('./add-book.component.html'),
    styles: [require('./add-book.scss')]
})
export class AddBookComponent {
    @Output() notify:EventEmitter<any> = new EventEmitter();

    book:Book;

    private bindingList = ['soft', 'hard'];
    private languageList = ['en', 'ru', 'ua'];

    constructor(private bookManagerService:BookManagerService) {
        this.resetForm();
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

    onCreate() {
        var me = this;

        this.bookManagerService.create(this.book)
            .subscribe(function (book:Book) {
                me.notify.emit(book);
                me.resetForm();
            }, function () {
                console.log('Cannot create book');
            });
    }

    resetForm() {
        this.book = new Book({
            title: '',
            id: '',
            price: 0
        });
    }
}