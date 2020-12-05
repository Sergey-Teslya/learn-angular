import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name: string = 'Test name';
  age: number = 20;
  click:number = 0;

  setName(event: any): void {
    this.name = event.target.value;
  }

  updateClick(increased:boolean){
    increased == true ? this.click++ : this.click > 0 ? this.click-- : this.click;
  }
}
