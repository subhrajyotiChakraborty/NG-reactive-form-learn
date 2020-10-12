import { FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export const extraInputValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const name = control.get('name');
    const email = control.get('email');
    const extra = control.get('extra');

    // tslint:disable-next-line:max-line-length
    return name && name.value.trim().length && email && email.valid && email.value.trim().length && extra && !extra.value.trim().length ? { extraFieldRequired: true } : null;
};
