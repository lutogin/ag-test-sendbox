import { HttpClient } from '@angular/common/http';
import { User } from './user.class';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {
  constructor(
    private readonly client: HttpClient,
  ) {}

  getAll(): User[] {
    const result: User[] = [];
    this.client
      .get('assets/users.json')
      .pipe(map((data: { users: User[] }) => data.users))
      .subscribe((users: User[]) => result.push(...users));

    return result;
  }
}
