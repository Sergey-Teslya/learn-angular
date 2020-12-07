import { Injectable } from '@angular/core';
import {EventCardService} from "../event-card-service/event-card.service";
import {EventCard} from "../../models/event-card";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private key = "eventCards";

  constructor(private eventCardService: EventCardService) { }

  save(): void {
    localStorage.setItem(this.key, JSON.stringify(this.eventCardService.getEventCards()));
  }

  get(): EventCard[] {
    let jsonEventCards = localStorage.getItem(this.key);
    let dataEventCards = JSON.parse(jsonEventCards);
    let eventCards: EventCard[] = [];

    for (let data of dataEventCards) {
      eventCards.push(new EventCard(data._city, data._title, data._price));
    }

    return eventCards;
  }
}
