import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-output-child',
  templateUrl: './output-child.component.html',
  styleUrls: ['./output-child.component.scss']
})
export class OutputChildComponent implements OnInit {
  // TODO Фактически свойство customEventChange будет представлять собой событие, которое вызывается в методе
  //  onChangeNumber() по клику на кнопку и передается главному компоненту.

  @Output()
  customEventChange = new EventEmitter<boolean>();

  constructor() { }

  onChangeNumber(increased:any) {
    this.customEventChange.emit(increased);
  }

  ngOnInit(): void {
  }

}
