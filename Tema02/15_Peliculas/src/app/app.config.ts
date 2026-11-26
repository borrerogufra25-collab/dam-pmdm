import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  importProvidersFrom,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { tmdbApiKeyInterceptor } from './interceptors/tmdb-api-key-interceptor';
import { languageInterceptorInterceptor } from './interceptors/language-interceptor-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([tmdbApiKeyInterceptor, languageInterceptorInterceptor])),
    importProvidersFrom(NgbModule),
  ],
};
