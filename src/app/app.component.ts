import {Component, inject, OnInit} from '@angular/core';
import {MessageService} from "primeng/api";
import {ToastService} from "./services/ToastService";
import { environment } from '../environments/environment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    standalone: false
})
export class AppComponent implements OnInit {

  toastService = inject(ToastService);
  messageService = inject(MessageService);

  ngOnInit(): void {

    console.log(environment.apiUrl); // valor muda dependendo do build

    this.toastService.events.subscribe(m => this.messageService.add(m));

  }

}
