import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MathService {
  constructor(
    private readonly client: HttpClient,
  ) {}

  getSum(numbers: number[]): Observable<object> {
    const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token');

    return this.client
      .post('http://127.0.0.1:3000/sum', numbers, { headers });
  }
}
