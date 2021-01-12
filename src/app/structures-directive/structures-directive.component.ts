import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structures-directive',
  templateUrl: './structures-directive.component.html',
  styleUrls: ['./structures-directive.component.css']
})
export class StructuresDirectiveComponent implements OnInit {
  menu = [
    {
      title: 'File',
      show: true,
    },
    {
      title: 'Edit',
      show: true,
    },
    {
      title: 'View',
      show: true,
    },
    {
      title: 'Navigate',
      show: false,
    },
  ];

  showBlock = true;

  condition = true;

  toggleBlockShow(): void {
    this.showBlock = !this.showBlock;
  }

  toggleCondition(): void {
    this.condition = !this.condition;
  }

  ngOnInit(): void {
  }

}
