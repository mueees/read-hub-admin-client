import {provideRouter}  from '@angular/router';
import {BookRoutes} from './book/book.routes';

export const routes = [
    ...BookRoutes
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];