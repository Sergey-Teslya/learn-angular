import { Injectable } from '@angular/core';
import {EventCard} from "../../models/event-card";

@Injectable({
  providedIn: 'root'
})
export class EventCardService {
  private eventCards: EventCard[] = [new EventCard("Kiev", "Event-1", 100),
    new EventCard("Kiev", "Event-2", 200), new EventCard("Kiev", "Event-3", 300),
    new EventCard("Kiev", "Event-4", 400)];

  constructor() { }

  getEventCards(): EventCard[] {
    return this.eventCards;
  }

  save(eventCard: EventCard): void {
    this.eventCards.push(eventCard);
  }

  overwriteEventCards(eventCards: EventCard[]): void {
    this.eventCards.splice(0, this.eventCards.length);
    eventCards.forEach(event => {
      this.eventCards.push(event);
    })
  }

  deleteByArrayIndex(index: number) {
    this.eventCards.splice(index, 1);
  }
}
