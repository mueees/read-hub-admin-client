import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {Book} from '../book.ts';
import {AddBookComponent} from '../shared/components/add-book/add-book.component.ts';

@Component({
    selector: 'add-book-route',
    template: require('./add-book-route.component.html'),
    directives: [
        AddBookComponent
    ]
})
export class AddBookRouteComponent {
    constructor(private router:Router) {

    }

    onCreateBook(data:Book) {
        this.router.navigate(['/books']);
    }
}