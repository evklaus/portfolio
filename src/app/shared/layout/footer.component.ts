import { LanguageService } from './../../core/services/language.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent {

  public langStatus = true;

  public eng = {
    logoSrc: 'assets/img/uk.png',
    footerTitle: 'Contacts',
    footerDescTitle: 'Want to know more or just chat?',
    footerDesc: 'You are welcome!'
  };

  public rus = {
    logoSrc: 'assets/img/rus.png',
    footerTitle: 'Контакты',
    footerDescTitle: 'Хочешь узнать больше?',
    footerDesc: 'Добро Пожаловать!'
  };

  get langCheck() {
    return this.langStatus ? this.eng : this.rus;
  }

  constructor(private languageService: LanguageService) {}

  public changeLang(): void {
    this.langStatus = !this.langStatus;
    this.languageService.changeLanguage();
  }
}
