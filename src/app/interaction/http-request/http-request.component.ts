import { Component, OnInit } from '@angular/core';
import { User } from './user.class';
import { UserService } from './user.service';
import {log} from 'util';

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

  constructor(
    private readonly userService: UserService
  ) { }

  ngOnInit(): void {
    const test = this.userService
      .getAll();
    console.log(test);
    this.users = test;
  }

}
