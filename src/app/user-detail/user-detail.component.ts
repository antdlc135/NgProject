import { Component, OnInit } from '@angular/core';
import { UserDetails } from '@app/models/user-detail';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  users: UserDetails[] = [
    {
      id: 3487,
      Name: 'Mario',
      Surname: 'Rossi',
      Age: 30,
      ['Date of Birth']: '1995/12/14',
      Address: {
        City: 'Roma',
        Street: 'Via roma 10',
        PostalCode: '00100',
      },
      Role: 'staff',
      username: 'MarioRossi80',
      profilePhotoUrl: 'https://bit.ly/3yRngEP',
      companies: [
        {
          id: 148979,
          name: 'Develhope',
          description: 'La migliore',
          location: {
            City: 'Palermo',
            Street: 'Via Libertà 58',
            PostalCode: '90139',
          },
        },
        {
          id: 123123,
          name: 'Apple',
          description: 'Eh insomma...',
          location: {
            City: 'Cupertino',
            Street: 'One Apple Park Way',
            PostalCode: '95014',
          },
        },
      ],
      Gender: 'male',
    },
  ];

  ImagePath: string = '';
  Date: string = '';

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
}
