import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (d) => d.DashboardComponent,
      ),
  },
  {
    path: 'deliveries',
    loadChildren: () =>
      import('./deliveries/deliveries.routes').then((r) => r.DELIVERIES_ROUTES),
  },
];
