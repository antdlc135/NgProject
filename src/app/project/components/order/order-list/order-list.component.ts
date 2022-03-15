import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { users } from '@app/data/users-data';
import { UserDetails } from '@app/models/user-detail';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent implements OnInit {
  @Output() getUser: EventEmitter<UserDetails> = new EventEmitter();
  @Output() deleteUser: EventEmitter<UserDetails> = new EventEmitter();
  constructor() {}
  users = users;

  ngOnInit(): void {}

  deleteU(user: UserDetails) {
    this.deleteUser.emit(user);
    this.users.splice(users.indexOf(user), 1);
    console.log('from parent', user);
  }
}
