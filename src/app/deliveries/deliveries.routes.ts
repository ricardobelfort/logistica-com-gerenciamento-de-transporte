import { Routes } from '@angular/router';

import { DeliveryListComponent } from './delivery-list/delivery-list.component';
import { DeliveriesByNeighborhoodComponent } from './deliveries-by-neighborhood/deliveries-by-neighborhood.component';

export const DELIVERIES_ROUTES: Routes = [
  { path: '', component: DeliveryListComponent },
  { path: 'entregas-por-bairro', component: DeliveriesByNeighborhoodComponent },
];
