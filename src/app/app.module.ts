import { DirectivesModule } from './core/directives/directives.module';
import { LandingPageModule } from './landing-page/landing-page.module';
import { HeaderComponent, FooterComponent } from './shared/layout';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    LandingPageModule,
    DirectivesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
