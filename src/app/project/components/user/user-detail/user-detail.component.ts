import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserDetails } from '@app/models/user-detail';
import { formatDate } from '@angular/common';
import { users } from '@app/data/users-data';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  @Output() closeDetails: EventEmitter<false> = new EventEmitter();
  fa = faDoorOpen;
  users: UserDetails[] = users;
  ImagePath: string = '';
  Date: string = '';
  @Input() rep!: UserDetails;
  constructor() {}

  ngOnInit(): void {}

  // const path = [];

  getObjectRegistry(user: UserDetails) {
    const registry: any = [];
    const url =
      /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

    const date = /(\d{4}\/)+/;

    Object.entries(user).forEach((el) => {
      let value = el[1];
      if (typeof value !== 'object' && !url.test(value) && !date.test(value)) {
        registry.push(el.join().replace(',', `: `));
      } else if (url.test(value)) {
        this.ImagePath = value;
      } else if (date.test(value)) {
        this.Date = `${el[0]}: ${formatDate(value, 'd MMM y', 'en-US')}`;
      }
    });
    return registry;
  }

  getObjectAddress(user: UserDetails) {
    const address: any = [];

    Object.values(user).forEach((el) => {
      if (typeof el === 'object' && !Array.isArray(el)) {
        Object.entries(el).forEach((elem) => {
          address.push(elem.join().replace(',', `: `));
        });
      }
    });
    return address;
  }

  close(ctrl: false) {
    this.closeDetails.emit(ctrl);
  }
}
