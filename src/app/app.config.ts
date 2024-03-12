import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';
import { authReducer } from './components/auth/state/auth.reducer';
import { sharedReducer } from './components/shared/state/shared.reducer';
import { CustomSerializer } from './components/store/router/custom-serialize';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),

    provideStore(
      {
        router: routerReducer,
      }
    ),
    provideEffects(),
    provideStoreDevtools({
      // maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      connectInZone: true, // If set to true, the connection is established within the Angular zone
      features: {
        pause: false,
        lock: true,
        persist: true
      }
    }),
    provideRouterStore({
      serializer: CustomSerializer
    }),
    provideState({ name: 'shared', reducer: sharedReducer }),
    provideState({ name: 'auth', reducer: authReducer })
  ]
};
