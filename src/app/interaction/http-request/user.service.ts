import { HttpClient } from '@angular/common/http';
import { User } from './user.class';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class UserService {
  constructor(
    private readonly client: HttpClient,
  ) {}

  getAll(): User[] {
    const result: User[] = [];
    this.client
      .get('assets/users.json')
      .pipe(
        map((data: { users: User[] }) => data.users),
        catchError((err: Error) => throwError(err))
      )
      .subscribe((users: User[]) => result.push(...users));

    return result;
  }
}
