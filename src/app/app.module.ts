import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {AppService} from "./app.service";
import {HomeComponent} from '../pages/home/home.component';
import {AlertComponent, AlertModule} from "ngx-bootstrap";
import {NewBookComponent} from "../pages/new-book/new-book.component";
import {BootstrapModalModule} from "ng2-bootstrap-modal";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        BootstrapModalModule,
        AlertModule.forRoot(),
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, {dataEncapsulation: false}
        )
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        NewBookComponent
    ],
    providers: [AppService, FormBuilder, AlertComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}