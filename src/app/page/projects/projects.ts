import { Component } from '@angular/core';
import { portfolioProjects } from '../../data/portfolio.data';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  readonly projects = portfolioProjects;
}
