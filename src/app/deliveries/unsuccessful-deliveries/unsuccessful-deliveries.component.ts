import { Component, inject, OnInit } from '@angular/core';
import { DeliveriesService } from '../../shared/services/deliveries.service';
import { DeliveriesFailed } from '../../shared/models/deliveries-failed';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-unsuccessful-deliveries',
  standalone: true,
  imports: [TableModule, CardModule, ProgressSpinnerModule],
  templateUrl: './unsuccessful-deliveries.component.html',
  styleUrl: './unsuccessful-deliveries.component.css',
})
export class UnsuccessfulDeliveriesComponent implements OnInit {
  private service = inject(DeliveriesService);
  resumeFailed: DeliveriesFailed[] = [];

  ngOnInit(): void {
    this.loadResumeFailed();
  }

  loadResumeFailed() {
    this.service.loadDeliveries().subscribe((entregas) => {
      const resumo: { [nome: string]: DeliveriesFailed } = {};

      entregas.forEach((entrega) => {
        const nome = entrega.motorista.nome;
        if (!resumo[nome]) {
          resumo[nome] = {
            nome,
            entregasComInsucesso: 0,
          };
        }

        if (entrega.status_entrega === 'INSUCESSO') {
          resumo[nome].entregasComInsucesso++;
        }
      });

      this.resumeFailed = Object.values(resumo);
    });
  }
}
