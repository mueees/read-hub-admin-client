import {Component, Output, EventEmitter} from '@angular/core';
import {Book} from '../../book.ts';

@Component({
    selector: 'add-book',
    template: require('./add-book.component.html')
})
export class AddBookComponent {
    @Output() notify:EventEmitter = new EventEmitter();

    book:Book;

    constructor() {
        this.resetForm();
    }

    onCreate() {
        this.notify.emit(new Book(this.book));
        this.resetForm();
    }

    resetForm() {
        this.book = new Book({
            title: '',
            id: '',
            price: 0
        });
    }
}