import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable}     from 'rxjs/Observable';

import {BOOKS} from './books-mock.ts';
import {Book} from '../book.ts';

@Injectable()
export class BookManagerService {
    constructor(private http:Http) {
    }

    private booksUrl = '/api/read-hub/books';  // URL to web API

    getBooks():Observable<Book[]> {
        return this.http.get(this.booksUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res:Response) {
        let books = res.json();
        books = books || [];

        return books.map(function (book) {
            return new Book({
                id: book.id || '',
                title: book.title || 'Empty title',
                price: book.price || -100
            });
        });

    }

    private handleError(error:any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';

        console.error(errMsg); // log to console instead

        return Observable.throw(errMsg);
    }
}