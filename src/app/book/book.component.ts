import {Component} from '@angular/core';
import {OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {Book} from './book.ts';
import {BookListComponent} from './components/book-list/book-list.component.ts';
import {AddBookComponent} from './components/add-book/add-book.component.ts';
import {BookManagerService} from './book-manager/book-manager.service.ts';

@Component({
    selector: 'book-feature',
    template: require('./book.component.html'),
    directives: [
        ROUTER_DIRECTIVES,
        BookListComponent,
        AddBookComponent
    ],
    providers: [
        BookManagerService
    ]
})
export class BookComponent implements OnInit {
    constructor(private bookManagerService:BookManagerService) {

    }

    books:Book[];
    errorMessage:any;

    ngOnInit() {
        this.bookManagerService.getBooks()
            .subscribe(
                books => this.books = books,
                error => this.errorMessage = <any>error);
    }

    onCreateBook(book:any) {
        this.books.push(book);
    }
}