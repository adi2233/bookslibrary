import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, tap } from 'rxjs/operators';

import { Book } from '../models/book';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AppService {

    private url = 'api/booksList';

    constructor(private http: HttpClient) {
    }

    /** GET books list */
    public booksList(): Observable<Book[]> {
        return this.http.get<Book[]>(this.url)
            .pipe(
                tap(_ => console.log('books list')),
                catchError(this.handleError('books list', []))
            );
    }

    public bookDetails(id: number): Observable<Book> {
        const url = `${this.url}/${id}`;
        return this.http.get<Book>(url).pipe(
            tap(_ => console.log(`book id=${id}`)),
            catchError(this.handleError<Book>(`book id=${id}`))
        );
    }

    /** POST: add a new book to list */
    public addNewBook(book: Book): Observable<Book> {
        return this.http.post<Book>(this.url, book, httpOptions).pipe(
            tap((book: Book) => console.log(`added new book to list w/ id=${book.id}`)),
            catchError(this.handleError<Book>('add new book to list'))
        );
    }

    /** DELETE: delete the book from list */
    public deleteBook(book: Book | number): Observable<Book> {
        const id = typeof book === 'number' ? book : book.id;
        const url = `${this.url}/${id}`;

        return this.http.delete<Book>(url, httpOptions).pipe(
            tap(_ => console.log(`deleted book from list id=${id}`)),
            catchError(this.handleError<Book>('delete book from list'))
        );
    }

    /** PUT: update the book details */
    public updateBook(book: Book): Observable<any> {
        return this.http.put(this.url, book, httpOptions).pipe(
            tap(_ => console.log(`updated book id=${book.id}`)),
            catchError(this.handleError<any>('update book'))
        );
    }

    /** handle error*/
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        };
    }

}