import { AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class Validation {

    static DATE_PATTERN = /^\s*(3[01]|[12][0-9]|0?[1-9])\/(1[012]|0?[1-9])\/((?:19|20)\d{2})\s*$/;

    static date(control: AbstractControl) {
        if (!((Validation.DATE_PATTERN.test(control.value)))) {
            return { 'invalidDate': true };
        }
    }

}