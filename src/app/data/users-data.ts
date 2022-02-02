import { UserDetails } from '@app/models/user-detail';

export const users: UserDetails[] = [
  {
    id: 3487,
    Name: 'Mario',
    Surname: 'Rossi',
    Age: 25,
    ['Date of Birth']: '1995-14-12',
    Address: {
      City: 'Roma',
      Street: 'Via roma 10',
      PostalCode: '00100',
    },
    Role: 'staff',
    username: 'MarioRossi80',
    profilePhotoUrl: 'https://bit.ly/3yRngEP',
    Gender: 'male',
  },
  {
    id: 12312,
    Name: 'Maria',
    Surname: 'Rossa',
    Age: 26,
    ['Date of Birth']: '1994-10-11',
    Address: {
      City: 'Palermo',
      Street: 'Via Palermo 10',
      PostalCode: '90100',
    },
    Role: 'manager',
    username: 'MariaRossa94',
    profilePhotoUrl: 'https://bit.ly/3DWWxuj',
    Gender: 'female',
  },
  {
    id: 45645,
    Name: 'Elis',
    Surname: 'Miao',
    Age: 5,
    ['Date of Birth']: '2016-05-08',
    Address: {
      City: 'Palermo',
      Street: 'Via Palermo 120',
      PostalCode: '90100',
    },
    Role: 'admin',
    username: 'ElisMiao',
    profilePhotoUrl: 'https://bit.ly/3zU6iH3',
    Gender: 'female',
  },
];
