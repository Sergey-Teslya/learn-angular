import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input-child',
  templateUrl: './input-child.component.html',
  styleUrls: ['./input-child.component.scss']
})
export class InputChildComponent implements OnInit {

  @Input()
  userName: string;

  @Input()
  userAge: number;

  constructor() { }

  ngOnInit(): void {
  }

}
