import {Component, Input} from '@angular/core';
import {Book} from '../../book.ts';

@Component({
    selector: 'book-list',
    template: require('./book-list.component.html')
})
export class BookListComponent {
    construcor() {
        console.log('This is Books List Component');
    }

    @Input()
    books:Array<Book>;
}