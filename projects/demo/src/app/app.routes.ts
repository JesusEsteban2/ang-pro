import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },

  {
    path: 'home',
    loadComponent: () => import('./home/home.component'),
    title: 'Home | Angular Demo',
    data: { label: 'Home' },
  },

  {
    path: 'films',
    loadComponent: () => import('./films/films.component'),
    title: 'Films | Angular Demo',
    data: { label: 'Films' },
  },
  {
    path: 'film/:id',
    loadComponent: () =>
      import('./films/components/film.detail/film.detail.component'),
    title: 'Film Detail | Angular Demo',
    //data: { label: 'Details' },
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.component'),
    title: 'About | Angular Demo',
    data: { label: 'About' },
  },
  { path: '**', redirectTo: 'home' },
];
