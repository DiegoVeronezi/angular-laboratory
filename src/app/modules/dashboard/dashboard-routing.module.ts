import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardOverviewComponent } from './containers/dashboard-overview/dashboard-overview.component';
import { DashboardPageComponent } from './containers/dashboard-page/dashboard-page.component';
import { DashboardTransactionsComponent } from './containers/dashboard-transactions/dashboard-transactions.component';
import { DashboardUsersComponent } from './containers/dashboard-users/dashboard-users.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent,
    children: [
      { path: 'overview', component: DashboardOverviewComponent },
      { path: 'transactions', component: DashboardTransactionsComponent },
      { path: 'users', component: DashboardUsersComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
