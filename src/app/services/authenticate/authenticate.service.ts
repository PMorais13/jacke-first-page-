import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  private _loggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);


  public getInfoLogin(): Observable<boolean> {
    return this._loggedIn.asObservable();
  }

  public setInfoLogin(info: boolean): void {
    this._loggedIn.next(info);
  }
}
