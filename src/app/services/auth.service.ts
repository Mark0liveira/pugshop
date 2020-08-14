import { Security } from './../utils/user.util';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthService implements CanActivate {

    constructor(private router: Router) {
    }

    canActivate(): boolean {
        if (!Security.hasToken()) {
            this.router.navigate([`login`]);
            return false;
        }

        return true;
    }

}
