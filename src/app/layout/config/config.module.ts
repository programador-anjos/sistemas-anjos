import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarModule } from 'primeng/sidebar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';
import { AppConfigComponent } from './app.config.component';
import {ToggleSwitch} from "primeng/toggleswitch";
import {Drawer} from "primeng/drawer";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SidebarModule,
    RadioButtonModule,
    ButtonModule,
    InputSwitchModule,
    ToggleSwitch,
    Drawer
  ],
    declarations: [
        AppConfigComponent
    ],
    exports: [
        AppConfigComponent
    ]
})
export class AppConfigModule { }
