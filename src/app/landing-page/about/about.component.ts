import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent {
  skills: string[] = [
    'Good knowledge of HTML5, CCS3, JS',
    'Angular, React SPA Development',
    'Experience in creating HTML-pages on the basis of Figma layouts',
    'Worked with CCS preprocessors, such as SASS',
    'Experience in GIT, TFS, JIRA'
  ];

  public pdfClick() {
    const url = 'assets/pdf/cv.pdf';
    window.open(url, '_blank');
  }
}
