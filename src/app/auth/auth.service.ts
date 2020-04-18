import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_KEY = 'AIzaSyDQlXdV5GqjnIbFPGwb8XIpEVwhK3PS-nQ';

interface AuthResponse {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    return this.http.post<AuthResponse>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
    {
      email,
      password,
      returnSecureToken: true
    }
    );
  }
}
