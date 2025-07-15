import {DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule, provideZoneChangeDetection} from "@angular/core";
import {AppComponent} from "./app.component";
import {ConfirmationService, MessageService} from "primeng/api";
import {NoCacheHeadersInterceptorService} from "./services/interceptors/NoCacheHeadersInterceptorService";
import {HTTP_INTERCEPTORS, provideHttpClient} from "@angular/common/http";
import {ModuloSistema} from "./modulos/ModuloSistema";
import {ModuloDeus} from "./modulos/ModuloDeus";
import {ModuloPublico} from "./modulos/ModuloPublico";
import {ToastModule} from "primeng/toast";
import {ModuloAngular} from "./modulos/ModuloAngular";
import {ModuloPrimeng} from "./modulos/ModuloPrimeng";
import {AparenciaComponent} from "./componentes/sistema/aparencia/aparencia.component";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {providePrimeNG} from "primeng/config";
import {MessageModule} from "primeng/message";
import {DemonstracaoService} from "./componentes/publico/demonstracao/service/demonstracao.service";
import {LaraSky} from "./tema";


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
    MessageModule,
    ConfirmationService,
    DemonstracaoService,
    provideZoneChangeDetection({eventCoalescing: true}),
    provideHttpClient(),
    // provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
      ripple: true,
      translation: {
        accept: 'sim',
        reject: 'não',
        "emptyMessage": "Sem registros",
        "dayNames": ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"],
        "dayNamesShort": ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
        "dayNamesMin": ["Do", "Se", "Te", "Qu", "Qu", "Se", "Sa"],
        "monthNames": ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        "monthNamesShort": ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
      },
      theme: {
        preset: LaraSky,
        options: {
          darkModeSelector: '.dark',
          cssLayer: {
            name: 'primeng',
            order: 'theme, base, primeng'
          }
        },
      }
    }),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NoCacheHeadersInterceptorService,
      multi: true
    },
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL'},
    // {provide: LOCALE_ID, useValue: "pt-BR"},
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
