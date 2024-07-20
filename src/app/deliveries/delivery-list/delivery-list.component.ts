import { Component, inject } from '@angular/core';
import { DeliveriesService } from '../deliveries.service';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-delivery-list',
  standalone: true,
  imports: [AsyncPipe, CommonModule],
  templateUrl: './delivery-list.component.html',
  styleUrl: './delivery-list.component.css',
})
export class DeliveryListComponent {
  private service = inject(DeliveriesService);
  deliveries$ = this.service.loadDeliveries();
}
