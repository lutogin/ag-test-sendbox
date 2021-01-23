import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './user.class';
import { UserService } from './user.service';
import { MathService } from './math.service';

@Component({
  selector: 'app-http-request',
  templateUrl: './http-request.component.html',
  styleUrls: ['./http-request.component.css'],
  providers: [
    UserService,
    MathService,
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

  getUsers(): void {
    this.userService
      .getAll()
      .subscribe((users: User[]) => this.users.push(...users));
  }

  getSum(): void {
    const numbers: number[] = this.toSum
      .split(',')
      .map((el) => Number(el));

    this.mathService
      .getSum(numbers)
      .subscribe((data: { result: number }) => this.sumResult = data.result);
  }

  ngOnInit(): void {
  }
}
