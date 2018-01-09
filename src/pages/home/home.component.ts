import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { AppService } from '../../app/app.service';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'home-page',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {

    public books: Book[] = [];
    public booksList: Book[] = [];
    public bookTitle: string = '';
    public invalidTitle: boolean = false;
    public newTitle: string = '';

    @Input() book: Book;

    constructor(private appService: AppService,
                private fb: FormBuilder,
                private location: Location,
                private sanitizer: DomSanitizer) {
    }

    ngOnInit() {
        this.getBooksList();
    }

    public getBooksList(): void {
        this.appService.booksList()
            .subscribe(books => {
                this.books = books;
            });
    }

    public openConfirm(book) {
        if (confirm('Are you sure you want to delete ' + book.title)) {
            this.deleteBook(book.id, book);
        } else {
            return;
        }
    }

    public deleteBook(bookId, book) {
        this.getBook(bookId);

        this.books = this.books.filter(index => index !== book);
        this.appService.deleteBook(book).subscribe();
    }

    public getBook(bookId) {
        this.appService.bookDetails(bookId)
            .subscribe(book => {
                this.book = book;
                this.bookTitle += book[ 'title' ];
            });
    }

    public editBook() {
        this.appService.booksList()
            .subscribe(books => {
                this.booksList = books;

                for (let i = 0; i < books.length; i++) {
                    if (this.booksList[ i ].title === this.book[ 'title' ].trim()) {
                        this.invalidTitle = true;
                    }
                }
            });


        this.appService.updateBook(this.book)
            .subscribe(() => this.goBack());
    }

    public goBack(): void {
        this.location.back();
    }

    public onFileChange(event) {
        let reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            let file = event.target.files[ 0 ];
            reader.readAsDataURL(file);
            reader.onload = () => {
                let sanitizedUrl = this.sanitizer.bypassSecurityTrustUrl(reader.result.split(',')[ 1 ]);

                this.book[ 'image' ] = ('data:image/png;base64, ' + sanitizedUrl[ 'changingThisBreaksApplicationSecurity' ]);
            };
        }
    }

    public checkIfNotExist(event) {
        let inputTitle = event.target.value;

        this.appService.booksList()
            .subscribe(books => {
                this.booksList = books;

                for (let i = 0; i < books.length; i++) {
                    if (this.booksList[ i ].title === inputTitle.trim()) {
                        this.invalidTitle = true;
                    }
                }
            });
    }

    public onKey(event: any) {
        this.checkTitleValid(event.target.value);
    }

    public checkTitleValid(title) {
        let tempTitle = [];

        for (let i = 0; i < title.length; i++) {
            if (this.isLetter(title[ i ]) || title[ i ] == '' || title[ i ] == ' ') {
                tempTitle.push(title[ i ]);
            } else if (!(this.isLetter(title[ i ]))) {
                tempTitle.push('');
            }
        }

        this.newTitle = tempTitle.join('');
        this.newTitle = this.newTitle.charAt(0).toUpperCase() + this.newTitle.substr(1).toLowerCase();

        this.book[ 'title' ] = this.newTitle;
    }

    public isLetter(str) {
        return str.length === 1 && str.match(/[a-z]/i);
    }

}