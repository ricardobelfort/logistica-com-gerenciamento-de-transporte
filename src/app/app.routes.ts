import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'deliveries' },
  {
    path: 'deliveries',
    loadChildren: () =>
      import('./deliveries/deliveries.routes').then((r) => r.DELIVERIES_ROUTES),
  },
];
