import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GoalsComponent} from './goals/goals.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {GoalDetailComponent} from './goal-detail/goal-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'goals', component: GoalsComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: GoalDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule {
}
