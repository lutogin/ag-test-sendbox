import { Component, OnInit } from '@angular/core';
import { User } from './user.class';
import { UserService } from './user.service';
import {MathService} from './math.service';

@Component({
  selector: 'app-http-request',
  templateUrl: './http-request.component.html',
  styleUrls: ['./http-request.component.css'],
  providers: [
    UserService,
  ]
})
export class HttpRequestComponent implements OnInit {
  users: User[] = [];
  toSum: string;
  sumResult: number;

  constructor(
    private readonly userService: UserService,
    private readonly mathService: MathService,
  ) { }

  ngOnInit(): void {
    const test = this.userService
      .getAll();
    console.log(test);
    this.users = test;
  }

  getSum(): void {
    const numbers: number[] = this.toSum
      .split(',')
      .map((el) => Number(el));

    this.sumResult = this.mathService.getSum(numbers);
  }

}
