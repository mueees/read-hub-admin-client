import {Component, OnInit} from '@angular/core';

import {Book} from '../book.ts';
import {AddBookComponent} from '../shared/components/add-book/add-book.component.ts';

@Component({
    selector: 'add-book-route',
    template: require('./add-book-route.component.html'),
    directives: [
        AddBookComponent
    ]
})
export class AddBookRouteComponent implements OnInit {
    constructor() {

    }

    onCreateBook(data:any) {
        console.log('New Book was created');
        console.log(data);
    }
}