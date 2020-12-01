import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// TODO Модули они регестрируют различные другие модули и компоненты
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  // TODO В данном случае значение bootstrap: [ AppComponent ] указывает, что модуль для загрузки
  //  в качестве основного компонента будет использовать класс AppComponent.

  // TODO Если мы опустим компонент: bootstrap: [ ] или вовсе уберем параметр bootstrap, то на веб-страницу не будет
  //  загружаться представление из комопонента AppComponent.
  bootstrap: [AppComponent]
})
export class AppModule { }
