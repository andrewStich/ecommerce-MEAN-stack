import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/models/user/User.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  login(username, password): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/users/authenticate`, { username, password })
      .pipe(map(user => {
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      }));
  }

  logout(): void {
    localStorage.removeItem('user');
    this.userSubject = null;
    this.router.navigate(['/account/login']);
  }

  register(user: User): Observable<object> {
    return this.http.post(`${environment.apiUrl}/users`, user);
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/uesrs`);
  }

  getById(id: string): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
  }

  update(id, params): Observable<object> {
    return this.http.put(`${environment}/users/${id}`, params)
      .pipe(map(x => {
        if (id === this.userValue.id) {
          const user = { ...this.userValue, ...params };
          localStorage.setItem('user', JSON.stringify(user));
          this.userSubject.next(user);
        }
        return x;
      }));
  }

  delete(id: string): Observable<object> {
    return this.http.delete(`${environment.apiUrl}/users/${id}`)
      .pipe(map(x => {
        if (id === this.userValue.id) {
          this.logout();
        }
        return x;
      }));
  }
}
