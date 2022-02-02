import { Component, OnInit, Output } from '@angular/core';
import { users } from '@app/data/users-data';
import { UserDetails } from '@app/models/user-detail';
import { findIndex } from 'rxjs';
import { UserDetailComponent } from '../user-detail/user-detail.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  @Output() users = users;
  deleted!: UserDetails;
  constructor() {}

  ngOnInit(): void {}

  deleteU(user: UserDetails) {
    this.deleted = user;
  }
}
