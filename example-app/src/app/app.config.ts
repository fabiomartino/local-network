import {
  ApplicationConfig,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
  inject,
} from '@angular/core';
import {
  RouteReuseStrategy,
  provideRouter,
  PreloadAllModules,
  withPreloading,
} from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular, ToastController } from '@ionic/angular';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideIonicAngular({}),
    provideAppInitializer(() => {
      // Preload Ionic services used across the demo, matching the CapKit demo pattern.
      inject(ToastController);
    }),
  ],
};
