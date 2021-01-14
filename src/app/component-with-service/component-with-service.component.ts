import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
// import { LogService } from './log.service';

@Component({
  selector: 'app-component-with-service',
  templateUrl: './component-with-service.component.html',
  styleUrls: ['./component-with-service.component.css'],
  providers: [
    DataService,
  ]
})
export class ComponentWithServiceComponent implements OnInit {
  items: string[] = [];
  name: string;

  constructor(
    private readonly dataService: DataService,
  ) {}

  addItem(newPhone: string): void {
    this.dataService.addData(newPhone);
    this.clearName();
  }

  private clearName(): void {
    this.name = '';
  }

  ngOnInit(): void {
    this.items = this.dataService.getData();
  }

}
