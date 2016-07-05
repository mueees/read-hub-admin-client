import {RouterConfig}          from '@angular/router';
import {BookListComponent}     from './book-list.component';

export const BooksRoutes:RouterConfig = [
    {
        path: 'books',
        component: BookListComponent
    }
];