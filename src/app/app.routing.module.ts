import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  { path: '', redirectTo: 'project/user', pathMatch: 'full' },
  { path: '', component: ProjectComponent },
  { path: '**', redirectTo: 'project/404-ERROR' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
