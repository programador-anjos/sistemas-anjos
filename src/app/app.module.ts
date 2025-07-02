import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {ConfirmationService, MessageService} from "primeng/api";
import {NoCacheHeadersInterceptorService} from "./services/interceptors/NoCacheHeadersInterceptorService";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import {ModuloSistema} from "./modulos/ModuloSistema";
import {ModuloDeus} from "./modulos/ModuloDeus";
import {ModuloPublico} from "./modulos/ModuloPublico";
import {MessagesModule} from "primeng/messages";
import {ToastModule} from "primeng/toast";
import {ModuloAngular} from "./modulos/ModuloAngular";
import {ModuloPrimeng} from "./modulos/ModuloPrimeng";
import {AparenciaComponent} from "./componentes/sistema/aparencia/aparencia.component";

@NgModule({
  imports: [
    ModuloAngular,
    ModuloPrimeng,
    ModuloPublico,
    ModuloSistema,
    ModuloDeus,
    ToastModule
  ],
  declarations: [
    AppComponent,
    AparenciaComponent
  ],
  providers: [
    MessageService,
    MessagesModule,
    ConfirmationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NoCacheHeadersInterceptorService,
      multi: true
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
