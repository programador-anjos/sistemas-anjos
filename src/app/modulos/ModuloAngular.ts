import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterLink, RouterOutlet} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";

@NgModule({ exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterOutlet,
        RouterLink,
        BrowserModule,
        BrowserAnimationsModule,
    ], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterOutlet,
        RouterLink,
        BrowserModule,
        BrowserAnimationsModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class ModuloAngular {
}
