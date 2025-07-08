import {NgModule, provideZoneChangeDetection} from "@angular/core";
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
import Lara from '@primeuix/themes/lara';
import {definePreset} from "@primeuix/themes";
import {DemonstracaoService} from "./componentes/publico/exemplo/service/demonstracao.service";

const LaraSky = definePreset(Lara, {
  semantic: {
    primary: {
      50: '{sky.50}',
      100: '{sky.100}',
      200: '{sky.200}',
      300: '{sky.300}',
      400: '{sky.400}',
      500: '{sky.500}',
      600: '{sky.600}',
      700: '{sky.700}',
      800: '{sky.800}',
      900: '{sky.900}',
      950: '{sky.950}'
    },
    colorScheme: {
      light: {
        primary: {
          color: '{sky.500}',
          inverseColor: '#ffffff',
          hoverColor: '{sky.600}',
          activeColor: '{sky.700}'
        },
        highlight: {
          background: '{sky.500}',
          focusBackground: '{sky.600}',
          color: '#ffffff',
          focusColor: '#ffffff'
        }
      },
      dark: {
        primary: {
          color: '{sky.50}',
          inverseColor: '{sky.950}',
          hoverColor: '{sky.100}',
          activeColor: '{sky.200}'
        },
        highlight: {
          background: 'rgba(250, 250, 250, .16)',
          focusBackground: 'rgba(250, 250, 250, .24)',
          color: 'rgba(255,255,255,.87)',
          focusColor: 'rgba(255,255,255,.87)'
        }
      }
    }
  }
});



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
    provideZoneChangeDetection({ eventCoalescing: true }),
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
          darkModeSelector: '.p-dark',
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
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
