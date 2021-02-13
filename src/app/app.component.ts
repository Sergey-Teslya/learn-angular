import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {decimalDigest} from "@angular/compiler/src/i18n/digest";
import {MyValidator} from "./my.validator";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required,
        MyValidator.restrictedEmail
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      address: new FormGroup({
        country: new FormControl('ua'),
        city: new FormControl('Kyiv', Validators.required)
      }),
      skills: new FormArray([])
    });
  }

  submit() {
    // Делаем проверку на валидность формы еще и в js. Для дополнительной безопастности
    if (this.form.valid) {
      console.log("Form submited");
      console.log(this.form);

      // TODO Очищаем форму после submit
      this.form.reset()
    }
  }

  setCapital() {
     const cityMap = {
       ru: 'Москва',
       ua: 'Киев',
       by: 'Минск'
     }

     const cityKey = this.form.get('address').get('country').value;
     const city = cityMap[cityKey];

     // TODO Благодоря этому методу можно динамически обновлять форму, при этом можно не нарушать состояние всей формы.
     // TODO В метод нужно передать объект который будет обновлен
     this.form.patchValue(
       {address: {city: city}
       })
  }

  addSkill() {
    // TODO Создание control вне формы. И добавление новых элементов в форму из ts
    const control = new FormControl('', Validators.required);
    // (<FormArray>this.form.get('skills')).push(control);
    (this.form.get('skills') as FormArray).push(control)
  }
}
