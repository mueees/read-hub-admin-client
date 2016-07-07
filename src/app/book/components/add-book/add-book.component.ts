import {Component} from '@angular/core';

@Component({
    selector: 'add-book',
    template: require('./add-book.component.html')
})
export class AddBookComponent {
    constructor() {
        console.log('This is Add Book Component');
    }
}