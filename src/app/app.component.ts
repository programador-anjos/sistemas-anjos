import {Component, inject, OnInit} from '@angular/core';
import {MessageService} from "primeng/api";
import {ToastService} from "./services/ToastService";

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

    this.toastService.events.subscribe(m => this.messageService.add(m));

  }

}
