import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-form',
  templateUrl: './hello-form.component.html',
  styleUrls: ['./hello-form.component.css']
})
export class HelloFormComponent implements OnInit {
  private DEFAULT_NAME = 'Idiot';

  count = 0;
  name = this.DEFAULT_NAME;
  age = 27;
  msgLastName: string;
  lastNameIsRequired = false;
  firstNameClass = 'firstNameClass';

  changeFirstNameField(name): void {
    this.msgLastName = this.name + ' лошара, и фамилию тоже';
    this.lastNameIsRequired = true;
  }

  focusFirstNameField(name): void {
    this.name = this.DEFAULT_NAME === name ? '' : name;
  }

  click(name, event): void {
    console.log({
      name,
      evt: event,
    });
    this.count += 1;
  }

  ngOnInit(): void {
  }

}
