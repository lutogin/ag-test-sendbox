import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MathService {
  constructor(
    private readonly client: HttpClient,
  ) {}

  getSum(numbers: number[]): number {
    let result = 0;

    this.client
      .post('http://127.0.0.1:3000/sum', numbers)
      .subscribe((data: { result: number }) => result = data.result);

    return result;
  }
}
