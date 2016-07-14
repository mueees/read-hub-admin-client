import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';

import {AuthService} from './auth.service.ts';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService:AuthService) {

    }

    canActivate() {
        if (this.authService.isLoggedIn) {
            return true;
        } else {
            this.authService.login();
        }
    }
}