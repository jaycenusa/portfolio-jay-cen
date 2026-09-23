import { Component } from '@angular/core';
import { workExperience } from '../../data/portfolio.data';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  readonly experience = workExperience;
}
