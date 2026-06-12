import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { HomePage } from './page/home-page/home-page';
import { AboutMe } from './page/about-me/about-me';
import { Achievements } from './page/achievements/achievements';
import { Projects } from './page/projects/projects';
import { Contact } from './page/contact/contact';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomePage },
      { path: 'about-me', component: AboutMe },
      { path: 'achievements', component: Achievements },
      { path: 'projects', component: Projects },
      { path: 'contact', component: Contact },
    ],
  },
];
