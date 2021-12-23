import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExampleService {
  users: Array<string>;

  constructor() {
    this.users = [];
  }

  getUsers(): Array<string> {
    return ['user1', 'user2', 'user3'];
  }
}
