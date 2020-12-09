import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vie-child',
  templateUrl: './vie-child.component.html',
  styleUrls: ['./vie-child.component.scss']
})
export class VieChildComponent implements OnInit {
  counter: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
