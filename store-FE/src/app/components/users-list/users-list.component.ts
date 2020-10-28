import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users = null;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.getAll().pipe(first()).subscribe(users => this.users = users);
  }

  deleteUser(id: string): void {
    const user = this.users.find(x => x.id === id);
    user.isDeleting = true;
    this.accountService.delete(id).pipe(first()).subscribe(() => this.users = this.users.filter(x => x.id !== id));
  }

}
