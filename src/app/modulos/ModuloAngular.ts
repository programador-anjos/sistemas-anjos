import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";

@NgModule({ exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterLink,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule
    ], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterLink,
        BrowserModule,
        BrowserAnimationsModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class ModuloAngular {
}
