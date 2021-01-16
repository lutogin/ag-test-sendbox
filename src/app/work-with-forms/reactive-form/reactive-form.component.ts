import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  myForm: FormGroup;
  constructor() {
    this.myForm = new FormGroup({
      userName: new FormControl('', [
        Validators.required,
        this.userNameValidator
      ]),
      userEmail: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      phones: new FormArray([
        new FormControl('+38', [
          Validators.required,
          Validators.pattern('[0-9]{9}')
        ])
      ])
    });
  }

  userNameValidator(control: FormControl): {userName: boolean} | null {
    if (
      control.value.length < 3
      || control.value === 'admin'
    ) {
      return {
        userName: true // if error
      };
    }

    return null; // if ok
  }

  /**
   * Добавляет еще одно поле с телефоном в форму
   */
  addMorePhoneNumber(): void {
    console.log(this.myForm.controls.phones);
    (this.myForm.controls.phones as FormArray).push(new FormControl('+38',
      [
        Validators.required,
        Validators.pattern('[0-9]{9}')
      ]));
  }

  actionSubmit(): void {
    console.log(this.myForm);
  }

  ngOnInit(): void {
  }

}
