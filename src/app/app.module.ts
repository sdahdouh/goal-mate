import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalsComponent } from './goals/goals.component';
import {FormsModule} from '@angular/forms';
import { GoalDetailComponent } from './goal-detail/goal-detail.component';
import { MessagesComponent } from './messages/messages.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    GoalsComponent,
    GoalDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
