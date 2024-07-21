import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { DeliveriesService } from '../shared/services/deliveries.service';
import { DeliveriesByNeighborhoodComponent } from '../deliveries/deliveries-by-neighborhood/deliveries-by-neighborhood.component';
import { DeliveriesInProgressComponent } from '../deliveries/deliveries-in-progress/deliveries-in-progress.component';
import { CardModule } from 'primeng/card';
import { UnsuccessfulDeliveriesComponent } from '../deliveries/unsuccessful-deliveries/unsuccessful-deliveries.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  standalone: true,
  imports: [
    AsyncPipe,
    DeliveriesByNeighborhoodComponent,
    DeliveriesInProgressComponent,
    CardModule,
    UnsuccessfulDeliveriesComponent,
  ],
})
export class DashboardComponent {
  private service = inject(DeliveriesService);
  deliveries$ = this.service.loadDeliveries();
}
