import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { portfolioStats, resumeLink, socialLinks } from '../../data/portfolio.data';

@Component({
  selector: 'app-about-me',
  imports: [RouterLink],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMe {
  readonly stats = portfolioStats;
  readonly socialLinks = socialLinks;
  readonly resumeLink = resumeLink;
}
