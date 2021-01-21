import { Component, OnInit } from '@angular/core';
import { User } from './user.class';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-request',
  templateUrl: './http-request.component.html',
  styleUrls: ['./http-request.component.css']
})
export class HttpRequestComponent implements OnInit {
  users: User[] = [];

  constructor(
    private readonly client: HttpClient
  ) { }

  ngOnInit(): void {
    this.client
      .get('assets/users.json')
      .subscribe((data: { users: User[] }) => {
        this.users.push(...data.users);
      });
  }

}
