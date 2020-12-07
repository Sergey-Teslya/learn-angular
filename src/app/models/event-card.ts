export class EventCard {
  private _city: string;
  private _title: string;
  private _price: number;

  constructor(city: string, title: string, price: number) {
    this._city = city;
    this._title = title;
    this._price = price;
  }


  get city(): string {
    return this._city;
  }

  set city(value: string) {
    this._city = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  toString(): string {
    return "City:" + this._city + " Title:" + this._title + " Price:" + this._price
  }
}
