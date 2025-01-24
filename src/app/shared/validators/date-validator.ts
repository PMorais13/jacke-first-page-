import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function dateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    const year = new Date(value).getFullYear();
    if (year <= 1900) {
      return { invalidYear: true };
    }
    return null;
  };
}
