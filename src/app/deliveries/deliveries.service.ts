import { inject, Injectable } from '@angular/core';
import { Delivery } from './delivery';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeliveriesService {
  private readonly API =
    'https://raw.githubusercontent.com/brunochikuji/example/main/entregas.json';

  private http = inject(HttpClient);

  loadDeliveries(): Observable<Delivery[]> {
    return this.http.get<Delivery[]>(this.API);
  }
}
