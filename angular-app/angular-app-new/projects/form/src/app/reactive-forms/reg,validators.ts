import { ValidationErrors, AbstractControl } from '@angular/forms';

export class RegValidators {
  static isStartWithA(control: AbstractControl): ValidationErrors | null {
    if ((control.value.charAt(0) === 'a') || (control.value.charAt(0) === 'A')) {
      console.log('start with a')
      return null;



    // tslint:disable-next-line:align
    } return { isStartWithA: true}

  }
}
