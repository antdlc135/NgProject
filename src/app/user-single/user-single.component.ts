import { Component, OnInit, Input } from '@angular/core';
import { UserDetails } from '@app/models/user-detail';
import { UserDetailComponent } from '../user-detail/user-detail.component';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css'],
})
export class UserSingleComponent implements OnInit {
  @Input() rep!: UserDetails;
  constructor() {}

  ngOnInit(): void {}
}
