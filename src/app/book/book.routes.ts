import {RouterConfig}          from '@angular/router';
import {BookComponent}     from './book.component.ts';
import {BookListRouteComponent}     from './book-list/book-list-route.component.ts';
import {AddBookRouteComponent}     from './add-book/add-book-route.component.ts';
import {EditBookRouteComponent}     from './edit-book/edit-book-route.component.ts';

export const BookRoutes:RouterConfig = [
    {
        path: 'books',
        useAsDefault: true,
        component: BookComponent,
        children: [
            {
                path: 'add',
                component: AddBookRouteComponent
            },
            {
                path: 'edit/:id',
                component: EditBookRouteComponent
            },
            {
                path: '',
                component: BookListRouteComponent
            }
        ]
    },
    {
        path: '',
        redirectTo: '/books',
        pathMatch: 'full'
    }
];