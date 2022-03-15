import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserDetails } from '@app/models/user-detail';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css'],
})
export class UserSingleComponent implements OnInit {
  @Input() rep!: UserDetails;
  @Output() remove: EventEmitter<UserDetails> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  deleteUser(user: UserDetails) {
    this.remove.emit(user);
    console.log('from child: ', user);
  }
}
