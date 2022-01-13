import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-users',
  templateUrl: './dashboard-users.component.html',
  styleUrls: ['./dashboard-users.component.scss'],
})
export class DashboardUsersComponent {
  mockArr: { status: string; name: string; email: string }[] = [
    { status: 'Pending', name: 'John Doe', email: 'johndoe@ghost.com' },
    { status: 'Down', name: 'Mister M', email: 'mistermm@ghost.com' },
    { status: 'Active', name: 'Mafia', email: 'mafia@ghost.com' },
  ];

  getAccountStatusClass(status: string): string {
    const classes: { [key: string]: string } = {
      Pending: 'table__body__cell__account-status--pending',
      Down: 'table__body__cell__account-status--down',
      Active: 'table__body__cell__account-status--active',
    };

    return classes[status];
  }
}
