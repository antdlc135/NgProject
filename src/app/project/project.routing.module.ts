import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { ProjectComponent } from '@app/project/project.component';
import { UserContainerComponent } from './pages/user-container/user-container.component';
import { OrderContainerComponent } from './pages/order-container/order-container.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'project',
    component: ProjectComponent,
    children: [
      { path: 'user', component: UserContainerComponent },
      { path: 'order', component: OrderContainerComponent },
      { path: '404-ERROR', component: PageNotFoundComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule {}
