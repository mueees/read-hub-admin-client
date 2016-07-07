import {Injectable} from '@angular/core';
import {Books} from './books-mock.ts';
import {Book} from '../book.ts';

Injectable()
export class BookManagerService {
    constructor() {
        console.log('This is Book Manager Service');
    }

    getBooks() {
        console.log('Get Books method start execute');
        return new Promise(function (resolve, reject) {
            console.log('Get Books method finish execute');
            resolve(Books);
        });
    }
}