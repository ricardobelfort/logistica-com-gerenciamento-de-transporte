import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { DeliveriesService } from '../../shared/services/deliveries.service';
import { ResumoMotorista } from '../../shared/models/resumo-motorista';

@Component({
  selector: 'app-deliveries-in-progress',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './deliveries-in-progress.component.html',
  styleUrl: './deliveries-in-progress.component.css',
})
export class DeliveriesInProgressComponent implements OnInit {
  private service = inject(DeliveriesService);

  resumoMotoristas: ResumoMotorista[] = [];

  ngOnInit(): void {
    this.carregarResumoMotoristas();
  }

  carregarResumoMotoristas() {
    this.service.loadDeliveries().subscribe((entregas) => {
      const resumo: { [nome: string]: ResumoMotorista } = {};

      entregas.forEach((entrega) => {
        const nome = entrega.motorista.nome;
        if (!resumo[nome]) {
          resumo[nome] = {
            nome,
            totalEntregas: 0,
            entregasRealizadas: 0,
            entregasComInsucesso: 0,
          };
        }
        resumo[nome].totalEntregas++;
        if (entrega.status_entrega === 'ENTREGUE') {
          resumo[nome].entregasRealizadas++;
        } else if (entrega.status_entrega === 'INSUCESSO') {
          resumo[nome].entregasComInsucesso++;
        }
      });

      this.resumoMotoristas = Object.values(resumo);
    });
  }
}
