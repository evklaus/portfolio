import { LanguageService } from './core/services/language.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  public title = 'my-cv';
  public langStatus: boolean;

  constructor(private languageService: LanguageService) {}

  public ngOnInit(): void {
    this.languageService.lang.subscribe(data => {
      this.langStatus = data;
    });
  }
}
