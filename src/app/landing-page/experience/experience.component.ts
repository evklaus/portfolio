import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.sass']
})
export class ExperienceComponent {
  experience: Experience[] = [
    { period: 'September, 2017 - April, 2018', title: 'Freelance', desc: 'Turnkey landing page creation' },
    {
      period: 'April, 2018 - Nov, 2018',
      title: 'Andersen',
      desc: `Worked on project TradeLink. It's website for Moet&hennessy distributors. Wrote this project from scratch.
      Of features IE10 support`
    }
  ];
}

interface Experience {
  period: string;
  title: string;
  desc: string;
}
