import { LandingPageComponent } from './landing-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro/intro.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';

const components = [
  LandingPageComponent,
  IntroComponent,
  SkillsComponent,
  AboutComponent,
  EducationComponent,
  ExperienceComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule
  ],
  exports: [...components]
})
export class LandingPageModule { }
