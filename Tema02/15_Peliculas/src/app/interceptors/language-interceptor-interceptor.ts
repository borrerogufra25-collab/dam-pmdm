import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environment';

export const languageInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  if (!req.url.startsWith(environment.tmdbBaseUrl)) {
    return next(req);
  }

  if (req.params.has('language')) {
    return next(req);
  }

  return next(req.clone({ setParams: { language: 'es-ES' } }));
};
