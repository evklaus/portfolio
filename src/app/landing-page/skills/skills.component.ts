import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass']
})
export class SkillsComponent {
  skills: Skills[] = [
    { name: 'html', picSrc: 'assets/img/html.png' },
    { name: 'css', picSrc: 'assets/img/css.png' },
    { name: 'javascript', picSrc: 'assets/img/js.png' },
    { name: 'angular', picSrc: 'assets/img/angular.png' },
    { name: 'react', picSrc: 'assets/img/react.png' },
  ];
}

interface Skills {
  name: string;
  picSrc: string;
}
