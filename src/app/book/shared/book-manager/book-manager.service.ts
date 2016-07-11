import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable}     from 'rxjs/Observable';

import {Book} from '../../book.ts';
import {getHost} from '../../../request/request.ts';

@Injectable()
export class BookManagerService {
    constructor(private http:Http) {

    }

    private booksUrl = getHost() + '/api/read-hub/books';

    create(book):Observable<Book> {
        let me = this;

        return this.http.put(this.booksUrl, book)
            .map(function (response:Response) {
                book._id = me.extractNewBookData(response);

                return new Book(book);
            })
            .catch(this.handleError);
    }

    getBooks():Observable<Book[]> {
        return this.http.get(this.booksUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    deleteBook(id):Observable {
        return this.http.delete(this.booksUrl + id)
            .catch(this.handleError);
    }

    private extractNewBookData(res:Response) {
        let book = res.json();

        return book._id;
    }

    private extractData(res:Response) {
        let books = res.json();
        books = books || [];

        return books.map(function (book) {
            return new Book(book);
        });
    }

    private handleError(error:any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';

        return Observable.throw(errMsg);
    }
}