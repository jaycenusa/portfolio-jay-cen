import { Component } from '@angular/core';
import { skillGroups } from '../../data/portfolio.data';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  readonly skillGroups = skillGroups;
}
