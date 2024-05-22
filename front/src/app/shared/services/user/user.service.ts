import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly _BASE_URL = 'http://localhost:8080/api/v1/users';

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this._BASE_URL}/all`);
  }

  getUserByEmail(email: string): Observable<User> {
    return this.http.get<User>(`${this._BASE_URL}/email/${email}`);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this._BASE_URL}/${id}`);
  }

  getCurrentUserData(): Observable<User> {
    return this.http.get<User>(`${this._BASE_URL}/current/data`);
  }

  getAllUserDisabled(): Observable<User[]> {
    return this.http.get<User[]>(`${this._BASE_URL}/disable/all`);
  }

  disabledUser(userId: number): Observable<User[]> {
    return this.http.put<User[]>(`${this._BASE_URL}/disable/${userId}`, {});
  }

  enabledUser(userId: number): Observable<User[]> {
    return this.http.put<User[]>(`${this._BASE_URL}/enable/${userId}`, {});
  }

  updateUserFirstname(
    userId: number,
    newFirstname: string
  ): Observable<User[]> {
    const params = { newFirstname };
    return this.http.put<User[]>(
      `${this._BASE_URL}/updateFirstname/${userId}`,
      null,
      { params }
    );
  }

  updateUserLastname(userId: number, newLastname: string): Observable<User[]> {
    const params = { newLastname };
    return this.http.put<User[]>(
      `${this._BASE_URL}/updateLastname/${userId}`,
      null,
      { params }
    );
  }

  deleteCurrentUser(): Observable<void> {
    return this.http.delete<void>(`${this._BASE_URL}/current/delete`);
  }
}
