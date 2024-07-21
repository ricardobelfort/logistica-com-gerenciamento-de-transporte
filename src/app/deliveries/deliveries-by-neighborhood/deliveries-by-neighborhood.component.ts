import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { DeliveriesService } from '../../shared/services/deliveries.service';
import { DeliveryStats } from '../../shared/models/delivery-stats';

@Component({
  selector: 'app-deliveries-by-neighborhood',
  standalone: true,
  imports: [CommonModule, TableModule, CardModule],
  templateUrl: './deliveries-by-neighborhood.component.html',
  styleUrl: './deliveries-by-neighborhood.component.css',
})
export class DeliveriesByNeighborhoodComponent implements OnInit {
  deliveryStats: DeliveryStats[] = [];
  private service = inject(DeliveriesService);

  ngOnInit() {
    this.loadAndProcessDeliveries();
  }

  loadAndProcessDeliveries(): void {
    this.service.loadDeliveries().subscribe((deliveries) => {
      const statsMap: { [bairro: string]: DeliveryStats } = {};

      deliveries.forEach(({ cliente_destino, status_entrega }) => {
        const { bairro } = cliente_destino;
        if (!statsMap[bairro]) {
          statsMap[bairro] = { bairro, total: 0, entregues: 0 };
        }
        statsMap[bairro].total++;
        if (status_entrega === 'ENTREGUE') {
          statsMap[bairro].entregues++;
        }
      });

      this.deliveryStats = Object.values(statsMap);
    });
  }
}
