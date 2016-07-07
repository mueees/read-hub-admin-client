import {Injectable} from '@angular/core';
import {BOOKS} from './books-mock.ts';

Injectable()
export class BookManagerService {
    constructor() {
    }

    getBooks() {
        return new Promise(function (resolve, reject) {
            console.log('Get Books method finish execute');
            resolve(BOOKS);
        });
    }
}