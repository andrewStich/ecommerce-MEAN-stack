import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  user: User = JSON.parse(localStorage.getItem('user'));
  name: string = this.user.userName;

  constructor() { }

  ngOnInit(): void {
  }

  onHome(): void {
    console.log('home button clicked');
  }

  onEdit(): void {
    console.log('edit button clicked');
  }

  onLogout(): void {
    console.log('logout button clicked');
  }
}
