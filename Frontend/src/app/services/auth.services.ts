import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { SignUpRequest } from 'src/app/models/signup-request.model';
import {Role} from "../models/role.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private signupUrl = 'http://localhost:8097/api/auth/signup';
  private signinUrl = 'http://localhost:8097/api/auth/signin';
  private apiUrl = 'http://localhost:8097';
  private readonly TOKEN_KEY = 'auth_token';
  private readonly USER_ID_KEY = 'user_id';

  constructor(private http: HttpClient) {}

  signup(signUpRequest: SignUpRequest): Observable<any> {
    return this.http.post(this.signupUrl, signUpRequest).pipe(
      tap(response => console.log('Signup success:', response)),
      catchError(error => {
        console.log('Signup error:', error);
        return throwError(error);
      })
    );
  }

  signin(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/auth/signin`, data).pipe(
      tap(result => {
        console.log('signin result:', result);
        const token = (result as { token: string }).token;
        this.storeToken(token);
        const userId = +(result as { userId: string }).userId; // convert userId to number
        this.storeUserId(userId); // pass userId as a number
      }),
      catchError(error => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  public storeToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  public storeUserId(userId: number): void {
    localStorage.setItem(this.USER_ID_KEY, userId.toString());
  }

  getUserId(): Observable<number> {
    return new Observable<number>(observer => {
      const userIdStr = localStorage.getItem(this.USER_ID_KEY);
      const userId = userIdStr ? +userIdStr : undefined; // parse userId as a number
      observer.next(userId);
      observer.complete();
    });
  }

  registerUserForEvent(eventId: number, userId: number): Observable<string> {
    const url = `${this.apiUrl}/events/${eventId}/register/${userId}`;
    return this.http.post<string>(url, null);
  }

  getToken(): string {
    return localStorage.getItem(this.TOKEN_KEY) as string;
  }
}

class User {
  constructor(
    public username: string,
    public email: string,
    public password: string,
    public roles: string[], // added role property
  ) {}

  toSignUpRequest() {
    return {
      username: this.username,
      email: this.email,
      password: this.password,
      roles: this.roles.map(roleName => ({ name: roleName } as Role)),
    };
  }

  static fromSignUpRequest(signUpRequest: SignUpRequest) {
    const roles = signUpRequest.roles.map(role => role.name);
    return new User(
      signUpRequest.username,
      signUpRequest.email,
      signUpRequest.password,
      roles // Remove the .name from the role object
    );
  }







}



