import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { EventCardComponent } from './event-card/event-card.component';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [EventCardComponent, HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
