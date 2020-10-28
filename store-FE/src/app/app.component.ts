import { Component } from '@angular/core';
import { User } from './models/user/User.model';
import { AccountService } from './services/account/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'store-FE';
  user: User;

  constructor(private accountService: AccountService) {
    this.accountService.user.subscribe(x => this.user = x);
  }

  logout(): void {
    this.accountService.logout();
  }
}
