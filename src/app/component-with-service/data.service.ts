import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: string[] = ['Apple iPhone XR', 'Samsung Galaxy S9',  'Nokia 9'];

  constructor(
    private readonly logService: LogService,
  ) {}

  getData(): string[] {
    this.logService.write('Get data');
    return this.data;
  }

  addData(data: string): string[] {
    this.data.push(data);
    this.logService.write({
      type: 'Data added',
      data,
    });

    return this.getData();
  }
}
