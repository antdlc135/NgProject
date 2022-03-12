import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserContainerComponent } from './pages/user-container/user-container.component';
import { OrderContainerComponent } from './pages/order-container/order-container.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserDetailComponent } from './components/user/user-detail/user-detail.component';
import { OrderListComponent } from '@app/project/components/order/order-list/order-list.component';
import { SharedModule } from '../shared/shared.module';
import { OrderSingleComponent } from '@app/project/components/order/order-single/order-single.component';

@NgModule({
  declarations: [
    OrderListComponent,
    OrderSingleComponent,
    UserContainerComponent,
    OrderContainerComponent,
    UserListComponent,
    UserDetailComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [
    UserContainerComponent,
    UserListComponent,
    UserDetailComponent,
    OrderContainerComponent,
  ],
})
export class ProjectModule {}
