import {Component, OnInit} from '@angular/core';

import {Book} from '../book.ts';
import {BookListComponent} from '../shared/components/book-list/book-list.component.ts';
import {BookManagerService} from '../shared/book-manager/book-manager.service.ts';

@Component({
    selector: 'book-list-route',
    template: require('./book-list-route.component.html'),
    directives: [
        BookListComponent
    ],
    providers: [
        BookManagerService
    ]
})
export class BookListRouteComponent implements OnInit {
    constructor(private bookManagerService:BookManagerService) {

    }

    books:Book[];

    ngOnInit() {
        this.bookManagerService.getBooks()
            .subscribe(
                books => this.books = books,
                error => this.errorMessage = <any>error);
    }
}