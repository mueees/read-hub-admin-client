import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable}     from 'rxjs/Observable';

import {Book} from '../../book.ts';
import { getHost } from '../../../request/request.ts';

@Injectable()
export class BookManagerService {
    constructor(private http:Http) {

    }

    private booksUrl = getHost() + '/api/read-hub/books';

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
                price: book.price || 0
            });
        });

    }

    private handleError(error:any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';

        return Observable.throw(errMsg);
    }
}