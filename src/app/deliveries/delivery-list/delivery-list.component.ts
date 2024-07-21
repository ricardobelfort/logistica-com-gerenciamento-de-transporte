/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, inject } from '@angular/core';
import { DeliveriesService } from '../../shared/services/deliveries.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-delivery-list',
  standalone: true,
  imports: [
    AsyncPipe,
    CommonModule,
    TableModule,
    CardModule,
    TagModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
  ],
  templateUrl: './delivery-list.component.html',
  styleUrl: './delivery-list.component.css',
})
export class DeliveryListComponent {
  private service = inject(DeliveriesService);
  deliveries$ = this.service.loadDeliveries();

  getSeverity(status: string) {
    switch (status) {
      case 'INSUCESSO':
        return 'danger';

      case 'ENTREGUE':
        return 'success';

      case 'PENDENTE':
        return 'warning';

      default:
        return undefined;
    }
  }
}
