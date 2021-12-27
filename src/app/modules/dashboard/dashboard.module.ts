import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './containers/dashboard-page/dashboard-page.component';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';

@NgModule({
  declarations: [DashboardPageComponent, DashboardHeaderComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
