import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {BookManagerService} from './shared/book-manager/book-manager.service';

@Component({
    selector: 'book-feature',
    template: require('./book.component.html'),
    providers: [BookManagerService],
    directives: [
        ROUTER_DIRECTIVES
    ]
})
export class BookComponent {
}