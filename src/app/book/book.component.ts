import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {Book} from './book.ts';

@Component({
    selector: 'book-feature',
    template: require('./book.component.html'),
    directives: [
        ROUTER_DIRECTIVES
    ]
})
export class BookComponent {
}