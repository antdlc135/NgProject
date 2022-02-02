enum role {
  staff,
  student,
  manager,
  admin,
}

enum gender {
  male,
  female,
  other,
}

interface location {
  City: string;
  Street: string;
  PostalCode: string;
}

interface company {
  id: number;
  name: string;
  description: string;
  location: location;
}

export interface UserDetails {
  id: number;
  Name: string;
  Surname: string;
  Age: number;
  ['Date of Birth']: string;
  Address: location;
  Role: keyof typeof role;
  username: string;
  profilePhotoUrl: string;
  companies?: company[];
  Gender: keyof typeof gender;
}
