import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ActivePage } from '../../enums/active-page.enum';

@Injectable({
  providedIn: 'root'
})
export class ControlerService {
  private _activePage: BehaviorSubject<ActivePage> = new BehaviorSubject<ActivePage>(ActivePage.INITIAL);


  public getActivePage(): Observable<ActivePage> {
    return this._activePage.asObservable();
  }

  public setActivePage(activePage: ActivePage): void {
    this._activePage.next(activePage)
  }
}
