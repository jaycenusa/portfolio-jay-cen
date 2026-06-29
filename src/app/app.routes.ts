import { Routes } from '@angular/router';
import { Header } from './components/header/header';
import { Logo } from './page/logo/logo';
import { AboutMe } from './page/about-me/about-me';
import { Achievements } from './page/achievements/achievements';
import { Projects } from './page/projects/projects';
import { Contact } from './page/contact/contact';

export const routes: Routes = [
  {
    path: '',
    component: Header,
    children: [
      { path: '', component: AboutMe, pathMatch: 'full' },
      { path: 'logo', component: Logo },
      { path: 'achievements', component: Achievements },
      { path: 'projects', component: Projects },
      { path: 'contact', component: Contact },
    ],
  },
];
