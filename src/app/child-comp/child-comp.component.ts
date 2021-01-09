import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit {
  @Input()
  userName: string;

  // tslint:disable-next-line:variable-name
  _userAge: number;

  @Input()
  set userAge(age: number) {
    if (age < 0) {
      this._userAge = 0;
    } else if (age > 120) {
      this._userAge = 120;
    } else {
      this._userAge = age;
    }
  }

  get userAge(): number {
    return this._userAge;
  }

  ngOnInit(): void {
  }
}
