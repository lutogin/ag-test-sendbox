import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user.class';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class UserService {
  constructor(
    private readonly client: HttpClient,
  ) {}

  getAll(): Observable<User[]> {
    const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token');

    return this.client
      .get('http://127.0.0.1:3000/users', { headers })
      .pipe(
        map((data: User[] ) => data),
        catchError((err: Error) => throwError(err))
      );
  }
}
