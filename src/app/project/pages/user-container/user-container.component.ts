import { Component, OnInit } from '@angular/core';
import { UserDetails } from '@app/models/user-detail';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css'],
})
export class UserContainerComponent implements OnInit {
  rep!: UserDetails | false;
  constructor() {}

  ngOnInit(): void {}

  sendUser(user: UserDetails) {
    this.rep = user;
  }

  removeUser(ctrl: UserDetails | false) {
    if (this.rep === ctrl || ctrl === false) this.rep = false;
  }
}
