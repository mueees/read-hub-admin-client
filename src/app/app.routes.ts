import {provideRouter}  from '@angular/router';
import {BookRoutes} from './book/book.routes';

export const routes = [
    ...BookRoutes,
    {
        path: '',
        redirectTo: '/book',
        pathMatch: 'full'
    }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];