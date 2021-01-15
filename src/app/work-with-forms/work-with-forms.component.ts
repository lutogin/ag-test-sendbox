import {Component, OnInit} from '@angular/core';
import {PhoneCompany, PhoneService} from './phone.service';
import {PhoneEntity} from './phone.entity';

@Component({
  selector: 'app-work-with-forms',
  templateUrl: './work-with-forms.component.html',
  styleUrls: ['./work-with-forms.component.css'],
  providers: [
    PhoneService,
  ],
})
export class WorkWithFormsComponent implements OnInit {
  phones: PhoneEntity[] = [];
  companies: string[];
  phone: PhoneEntity = new PhoneEntity('', 0, PhoneCompany.Apple);

  constructor(
    private readonly phoneService: PhoneService,
  ) { }

  addPhone(): void {
    const phone = new PhoneEntity(this.phone.title, this.phone.price, this.phone.company);
    this.phoneService.add(phone);
    this.cleanUpInputs();
  }

  cleanUpInputs(): void {
    this.phone = new PhoneEntity('', 0, PhoneCompany.Apple);
  }

  ngOnInit(): void {
    this.phones = this.phoneService.getAllPhones();
    this.companies = this.phoneService.getAllPhoneCompany();
  }

}
