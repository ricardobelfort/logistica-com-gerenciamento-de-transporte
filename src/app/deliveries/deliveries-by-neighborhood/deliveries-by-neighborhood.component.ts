import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { DeliveriesService } from '../../shared/services/deliveries.service';

@Component({
  selector: 'app-deliveries-by-neighborhood',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './deliveries-by-neighborhood.component.html',
  styleUrl: './deliveries-by-neighborhood.component.css',
})
export class DeliveriesByNeighborhoodComponent implements OnInit {
  entregasPorBairro: { [bairro: string]: number } = {};
  private service = inject(DeliveriesService);

  ngOnInit(): void {
    this.carregarEntregasPorBairro();
  }

  carregarEntregasPorBairro() {
    this.service.loadDeliveries().subscribe((entregas) => {
      entregas.forEach((entrega) => {
        const bairro = entrega.cliente_destino.bairro;
        if (!this.entregasPorBairro[bairro]) {
          this.entregasPorBairro[bairro] = 0;
        }
        this.entregasPorBairro[bairro]++;
      });
    });
  }
}
