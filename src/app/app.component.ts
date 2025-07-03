import {Component, OnInit} from '@angular/core';
import {MessageService} from "primeng/api";
import {ToastService} from "./services/ToastService";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    standalone: false
})
export class AppComponent implements OnInit {

  constructor(private toastService: ToastService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {

    this.toastService.events.subscribe(m => this.messageService.add(m));

  }

}
