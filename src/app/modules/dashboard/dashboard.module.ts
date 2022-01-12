import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './containers/dashboard-page/dashboard-page.component';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { DashboardNavComponent } from './components/dashboard-nav/dashboard-nav.component';
import { DashboardOverviewComponent } from './containers/dashboard-overview/dashboard-overview.component';
import { DashboardTransactionsComponent } from './containers/dashboard-transactions/dashboard-transactions.component';
import { DashboardUsersComponent } from './containers/dashboard-users/dashboard-users.component';

@NgModule({
  declarations: [
    DashboardPageComponent,
    DashboardHeaderComponent,
    DashboardNavComponent,
    DashboardOverviewComponent,
    DashboardTransactionsComponent,
    DashboardUsersComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
