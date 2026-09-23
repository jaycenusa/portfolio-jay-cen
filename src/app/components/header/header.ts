import { Component } from '@angular/core';
import { IsActiveMatchOptions, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  menuOpen = false;

  readonly navItems = [
    { label: 'about', fragment: 'about' },
    { label: 'skills', fragment: 'skills' },
    { label: 'projects', fragment: 'projects' },
    { label: 'experience', fragment: 'experience' },
  ] as const;

  readonly fragmentActiveOptions: IsActiveMatchOptions = {
    paths: 'exact',
    queryParams: 'ignored',
    fragment: 'exact',
    matrixParams: 'ignored',
  };

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}
