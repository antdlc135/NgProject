import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSingleComponent } from './components/user-single/user-single.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';

@NgModule({
  declarations: [UserSingleComponent, OrderDetailComponent],
  imports: [CommonModule],
  exports: [UserSingleComponent, OrderDetailComponent],
})
export class SharedModule {}
