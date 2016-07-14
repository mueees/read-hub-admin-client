import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';

import {AuthGuard, AuthService} from './security';

let authProviders = [AuthGuard, AuthService];

@Component({
    selector: 'my-app',
    template: require('./app.component.html'),
    directives: [ROUTER_DIRECTIVES]
})
class AppComponent {
}

export {AppComponent, authProviders}