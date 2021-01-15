import {PhoneCompany} from './phone.service';

export class PhoneEntity {
  title: string;
  price: number;
  company: PhoneCompany;

  constructor(title: string, price: number, company: PhoneCompany) {
    this.title = title;
    this.price = price;
    this.company = company;
  }
}
