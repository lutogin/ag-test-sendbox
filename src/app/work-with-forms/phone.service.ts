import {Injectable} from '@angular/core';
import {PhoneEntity} from './phone.entity';

export enum PhoneCompany {
  Apple = 'Apple',
  Samsung = 'Samsung',
  Xiaomi = 'Xiaomi',
  Nokia = 'Nokia',
}

@Injectable()
export class PhoneService {
  private data: PhoneEntity[] = [];

  add(phone: PhoneEntity): void {
    this.data.push(phone);
  }

  getAllPhones(): PhoneEntity[] {
    return this.data;
  }

  getAllPhoneCompany(): string[] {
    return Object.values(PhoneCompany);
  }
}
