import { Component, Input } from '@angular/core';
import { Book } from '../../models/book';
import { AppService } from '../../app/app.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'new-book-page',
    templateUrl: './new-book.component.html',
    styleUrls: [ './new-book.component.scss' ]
})
export class NewBookComponent {

    @Input() book: Book;
    public books: Book[] = [];
    public booksList: Book[] = [];
    private createNewBookForm: FormGroup;
    public newTitle: string = '';
    public invalidTitle: boolean = false;

    constructor(private appService: AppService,
                private fb: FormBuilder,
                private router: Router,
                private sanitizer: DomSanitizer) {
        this.createNewBookForm = fb.group({
            title: [ '', Validators.compose([ Validators.required ]) ],
            author: [ '', Validators.required ],
            date: [ '', Validators.compose([ Validators.required ]) ],
            image: [ '' ]
        });
    }

    public createNewBook(book) {
        this.appService.addNewBook(book).subscribe(response => {
            if (response.id) {
                this.books.push(response);
                this.router.navigate([ '/home' ]);
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

        this.createNewBookForm.controls[ 'title' ].setValue(this.newTitle);
    }

    public isLetter(str) {
        return str.length === 1 && str.match(/[a-z]/i);
    }

    public onFileChange(event) {
        let reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            let file = event.target.files[ 0 ];
            reader.readAsDataURL(file);
            reader.onload = () => {
                let sanitizedUrl = this.sanitizer.bypassSecurityTrustUrl(reader.result.split(',')[ 1 ]);

                this.createNewBookForm.controls[ 'image' ].setValue('data:image/png;base64, ' + sanitizedUrl[ 'changingThisBreaksApplicationSecurity' ]);
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
}