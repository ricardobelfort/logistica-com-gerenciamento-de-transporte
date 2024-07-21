import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { DeliveriesService } from '../shared/services/deliveries.service';
import { DeliveriesByNeighborhoodComponent } from '../deliveries/deliveries-by-neighborhood/deliveries-by-neighborhood.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  standalone: true,
  imports: [AsyncPipe, DeliveriesByNeighborhoodComponent],
})
export class DashboardComponent {
  private service = inject(DeliveriesService);
  deliveries$ = this.service.loadDeliveries();
}
