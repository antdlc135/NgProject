import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { users } from '@app/data/users-data';
import { UserDetails } from '@app/models/user-detail';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-single',
  templateUrl: './order-single.component.html',
  styleUrls: ['./order-single.component.css'],
})
export class OrderSingleComponent implements OnInit {
  @Input() rep!: UserDetails;
  @Output() getUser: EventEmitter<UserDetails> = new EventEmitter();
  @Output() deleteUser: EventEmitter<UserDetails> = new EventEmitter();
  users = users;
  constructor(private _router: Router) {}

  ngOnInit(): void {}
  deleteU(user: UserDetails) {
    this.deleteUser.emit(user);
    this.users.splice(users.indexOf(user), 1);
    console.log('from parent', user);
  }

  redirectTo() {
    this._router.navigate(['/project', 'user']);
  }
}
