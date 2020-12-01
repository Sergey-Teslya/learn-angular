import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home.component";
import {EventCardComponent} from "./event-card/event-card.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'event',
    component: EventCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
