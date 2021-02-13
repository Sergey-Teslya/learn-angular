import {FormControl} from "@angular/forms";

export class MyValidator {

  // TODO Указать кастомный объект для возврата, прям в момент декларации метода
  // TODO Как результат, нужно вернуть объект с ключем в виде string и значением boolean
  static restrictedEmail(control: FormControl): {[key: string]: boolean } {
    const restrictedEmails: string[] = ['test@gmail.com', "teslya@gmail.com"]

    if (restrictedEmails.includes(control.value)) {
      return {restrictedEmail: true}
    }

    // TODO Валидаторы возвращают null в том случаи если ошибки нет
    return null
  }

}
