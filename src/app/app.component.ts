import {Component, ViewChild} from '@angular/core';
import {VieChildComponent} from "./vie-child/vie-child.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name: string = 'Test name';
  age: number = 20;
  click:number = 0;

  // TODO Через аннотацию @ViewChild получаем объект компонента и можем обращаться к его данным и методам напрямую
  //  Я так понимаю, это некий аналог DI только мы не делаем внедрение зависимости через конструктор, а как буд-то через филд
  //  Так же можно делать привязку к шаблонным переменным
  //  С помощью аннотации ViewChild также можно связать свойство и переменную из шаблона
  @ViewChild(VieChildComponent, {static: false})
  private counterComponent: VieChildComponent;

  increment() { this.counterComponent.counter++ }
  decrement() { this.counterComponent.counter-- }

  setName(event: any): void {
    this.name = event.target.value;
  }

  updateClick(increased:boolean){
    increased == true ? this.click++ : this.click > 0 ? this.click-- : this.click;
  }
}
