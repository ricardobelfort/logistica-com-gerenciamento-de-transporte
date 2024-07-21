import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { DeliveriesService } from '../../shared/services/deliveries.service';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ResumeInProgress } from '../../shared/models/resume-in-progress';

@Component({
  selector: 'app-deliveries-in-progress',
  standalone: true,
  imports: [CommonModule, TableModule, CardModule],
  templateUrl: './deliveries-in-progress.component.html',
  styleUrl: './deliveries-in-progress.component.css',
})
export class DeliveriesInProgressComponent implements OnInit {
  private service = inject(DeliveriesService);

  resumeInProgress: ResumeInProgress[] = [];

  ngOnInit(): void {
    this.loadResumeInProgress();
  }

  loadResumeInProgress() {
    this.service.loadDeliveries().subscribe((entregas) => {
      const resumo: { [nome: string]: ResumeInProgress } = {};

      entregas.forEach((entrega) => {
        const nome = entrega.motorista.nome;
        if (!resumo[nome]) {
          resumo[nome] = {
            nome,
            totalEntregas: 0,
            entregasRealizadas: 0,
          };
        }
        resumo[nome].totalEntregas++;
        if (entrega.status_entrega === 'ENTREGUE') {
          resumo[nome].entregasRealizadas++;
        }
      });

      this.resumeInProgress = Object.values(resumo);
    });
  }
}
