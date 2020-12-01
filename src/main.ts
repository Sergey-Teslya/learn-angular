import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// TODO То есть фактически здесь platformBrowserDynamic запускает импортированный модуль AppModule.
//  После этого начинает работать вся логика, которая заложена в модуле AppModule,
//  Который представляет главный модуль приложения.

//TODO Эта фанкция сигнализирует ангуляру, что мы запускаем приложение в браузере
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
