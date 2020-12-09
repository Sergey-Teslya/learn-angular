import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-output-child',
  templateUrl: './output-child.component.html',
  styleUrls: ['./output-child.component.scss']
})
export class OutputChildComponent implements OnInit {
  // TODO Фактически свойство customEventChange будет представлять собой событие, которое вызывается в методе
  //  onChangeNumber() по клику на кнопку и передается главному компоненту.
  //  customEventChange - это событие которое будет срабатывать по вызову метода emit() и передавать какие-то значение
  //  которое будет заинкапсулирование и которое можно будет получить через $event в месте где это событие сработает
  //  к примеру <app-output-child (customEventChange)="updateClick($event)"></app-output-child>
  //  из примера видно, что компонент OutputChildComponent получает новое событие,
  //  которое сработает после определенной логики с дочернем компоненте
  //  и через него можно передавать определенные данные родителю ингорируя shadow dom

  @Output()
  customEventChange = new EventEmitter<boolean>();

  constructor() { }

  onChangeNumber(increased:any) {
    this.customEventChange.emit(increased);
  }

  ngOnInit(): void {
  }

}
