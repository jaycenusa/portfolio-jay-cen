import { Routes } from '@angular/router';
import { Header } from './components/header/header';
import { Home } from './page/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Header,
    children: [
      { path: '', component: Home, pathMatch: 'full' },
      { path: 'projects', redirectTo: '', pathMatch: 'full' },
      { path: 'skills', redirectTo: '', pathMatch: 'full' },
      { path: '**', redirectTo: '' },
    ],
  },
];
