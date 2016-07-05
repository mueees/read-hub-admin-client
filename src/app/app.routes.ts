import {provideRouter}  from '@angular/router';
import {BooksRoutes}        from './books/books.routes';

export const routes = [
    ...BooksRoutes
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];