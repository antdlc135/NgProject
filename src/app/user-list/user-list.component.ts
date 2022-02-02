import { Component, OnInit, Output } from '@angular/core';
import { users } from '@app/data/users-data';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  @Output() users = users;
  constructor() {}

  ngOnInit(): void {}
}
