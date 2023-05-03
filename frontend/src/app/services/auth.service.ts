import { Injectable } from '@angular/core';
import { IUser } from '../Interfaces/IUser';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  endpoint: string = environment.apiUrl + "users";
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser: any;
  badPassword: boolean = false;
  constructor(private http: HttpClient, public router: Router) {

  }
  // Sign-up
  register(registerDTO: any){
    console.log(registerDTO);
    this.http.post<any>(`${this.endpoint}/register`, registerDTO).subscribe((res: any) => {
      if(res){
        localStorage.setItem('token', res.token);
        localStorage.setItem('email', res.email);
        localStorage.setItem('isAdmin', res.isAdmin);
        this.currentUser = res;
        this.badPassword = false;
        this.router.navigate([""]);
      }
    })
  }
  // Sign-in
  login(user: IUser) {
    return this.http
      .post<any>(`${this.endpoint}/login`, user)
      .subscribe((res: any) => {
        if(res){
          localStorage.setItem('token', res.token);
          localStorage.setItem('email', res.email);
          localStorage.setItem('isAdmin', res.isAdmin);
          this.currentUser = res;
          this.badPassword = false;
          this.router.navigate([""]);
        }
          else{
            this.badPassword = true;
          }
      });
  }
  getToken() {
    return localStorage.getItem('token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('token');
    return authToken !== null ? true : false;
  }
  doLogout() {
    let removeToken = localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('isAdmin');
    if (removeToken == null) {
      this.router.navigate(['login']);
    }
  }
  // User profile
  getUserProfile(id: any): Observable<any> {
    let api = `${this.endpoint}/${id}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }
  // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}