import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private langSource = new BehaviorSubject<boolean>(true);
  public lang = this.langSource.asObservable();

  changeLanguage() {
    this.langSource.next(!this.langSource.value);
  }
}
