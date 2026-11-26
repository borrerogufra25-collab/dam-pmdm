import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environment';

export const tmdbApiKeyInterceptor: HttpInterceptorFn = (req, next) => {
  if (!req.url.startsWith('https://api.themoviedb.org/3')) {
    return next(req);
  }

  return next(req.clone({ setParams: { api_key: environment.tmdbApiKey } }));
};
