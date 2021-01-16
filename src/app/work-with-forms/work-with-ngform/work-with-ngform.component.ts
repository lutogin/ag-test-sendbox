import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-work-with-ngform',
  templateUrl: './work-with-ngform.component.html',
  styleUrls: ['./work-with-ngform.component.css'],
})
export class WorkWithNgformComponent implements OnInit {
  name = 'user';
  password: string;

  constructor() { }

  actionSubmitForm(data: NgForm): void {
    console.log(' ---> DATA SUBMITTED', data.form.value);
  }

  ngOnInit(): void {
  }

}
