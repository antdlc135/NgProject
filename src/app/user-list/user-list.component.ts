import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { users } from '@app/data/users-data';
import { UserDetails } from '@app/models/user-detail';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  @Output() getUser: EventEmitter<UserDetails> = new EventEmitter();
  users = users;
  deleted!: UserDetails;
  constructor() {}

  ngOnInit(): void {
    this.getUser.emit(users[0]);
  }

  deleteU(user: UserDetails) {
    this.users.splice(users.indexOf(user), 1);
    console.log('from parent', user);
  }

  getU(user: UserDetails) {
    this.getUser.emit(user);
  }
}
