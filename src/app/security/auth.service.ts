import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';

import {isDevelopment} from '../environment';

@Injectable()
export class AuthService {
    isLoggedIn:boolean = false;

    constructor() {
        if (isDevelopment()) {
            this.isLoggedIn = true;
        }
    }

    login() {
        let password = window.prompt('Enter password');

        if (password === 'youshallnotpass') {
            return Observable.of(true).do(val => this.isLoggedIn = true);
        } else {
            return Observable.of(false);
        }
    }

    logout() {
        this.isLoggedIn = false;
    }

}