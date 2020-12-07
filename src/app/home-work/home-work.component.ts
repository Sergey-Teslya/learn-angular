import { Component, OnInit } from '@angular/core';
import {EventCardService} from "../services/event-card-service/event-card.service";
import {LocalStorageService} from "../services/local-storage-service/local-storage.service";
import {EventCard} from "../models/event-card";

@Component({
  selector: 'app-home-work',
  templateUrl: './home-work.component.html',
  styleUrls: ['./home-work.component.scss']
})
export class HomeWorkComponent implements OnInit {
  eventCards: EventCard[];

  constructor(private eventCardService: EventCardService, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.eventCards = this.eventCardService.getEventCards();
  }

  addEventCard(city: string, title: string, price: number): void {
    this.eventCardService.save(new EventCard(city, title, price));
  }

  removeEventCard(index: number): void {
    this.eventCardService.deleteByArrayIndex(index);
  }

  saveInLocalStorage(): void {
    this.localStorageService.save();
  }

  updateEventCardsByLocalStorage(): void {
    let eventCardsByLocalStorage = this.localStorageService.get();
    this.eventCardService.overwriteEventCards(eventCardsByLocalStorage);
  }
}
