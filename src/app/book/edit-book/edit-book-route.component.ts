import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {Book} from '../book.ts';
import {EditBookComponent} from '../shared/components/edit-book/edit-book.component.ts';
import {BookManagerService} from '../shared/book-manager/book-manager.service.ts';

@Component({
    selector: 'edit-book-route',
    template: require('./edit-book-route.component.html'),
    directives: [
        EditBookComponent
    ]
})
export class EditBookRouteComponent implements OnInit {
    private sub:any;
    private book:Book;

    constructor(private router:Router,
                private bookManagerService:BookManagerService,
                private route:ActivatedRoute) {
    }

    ngOnInit() {
        var me = this;

        this.route.params.subscribe(params => {
            me.bookManagerService.getBooks().subscribe(function (books) {
                me.book = _.find(books, {
                    _id: params['id']
                });
            }, function () {
                console.error('Cannot get book');
            });
        });
    }

    onEditBook(book:Book) {
        this.router.navigate(['/books']);
    }

    onCancel(){
        this.router.navigate(['/books']);
    }
}