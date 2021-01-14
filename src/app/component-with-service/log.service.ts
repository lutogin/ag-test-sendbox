import { Injectable } from '@angular/core';

@Injectable()
export class LogService {
  write(msg: any): void {
    console.log(msg);
  }
}
