import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

import { ProjectModule } from './project/project.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule, ProjectModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
