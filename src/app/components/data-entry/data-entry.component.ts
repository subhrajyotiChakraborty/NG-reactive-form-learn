import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { extraInputValidator } from '../../extra-input-check.directive';

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.less']
})
export class DataEntryComponent implements OnInit {
  dataEntryForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.email],
    password: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
    extra: ['']
  }, { validators: extraInputValidator });

  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('value =>', this.dataEntryForm.value);
    console.log('errors email =>', this.dataEntryForm.controls.email.errors);
    console.log('valid =>', this.dataEntryForm.valid);
    console.log('form => ', this.dataEntryForm);
  }

  getExtraFieldLengthCheck() {
    return !this.dataEntryForm.get('extra').value.trim().length;
  }

}
