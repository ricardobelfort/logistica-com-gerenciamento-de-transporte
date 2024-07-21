import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { DeliveriesService } from './deliveries.service';

describe('DeliveriesService', () => {
  let service: DeliveriesService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DeliveriesService],
    });
    service = TestBed.inject(DeliveriesService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('loadDeliveries() should make a GET request and return the expected data', () => {
    const expectedData = [
      {
        id: '1',
        documento: '01021',
        motorista: {
          nome: 'Carlos Pereira',
        },
        cliente_origem: {
          nome: 'Empresa ABC',
          endereco: 'Rua dos Pinheiros, 789',
          bairro: 'Jardins',
          cidade: 'São Paulo',
        },
        cliente_destino: {
          nome: 'Ana Clara',
          endereco: 'Rua Vergueiro, 1234',
          bairro: 'Liberdade',
          cidade: 'São Paulo',
        },
        status_entrega: 'ENTREGUE',
      },
    ];

    service.loadDeliveries().subscribe((data) => {
      expect(data).toEqual(expectedData);
    });

    const req = httpTestingController.expectOne(
      'https://raw.githubusercontent.com/brunochikuji/example/main/entregas.json',
    );
    expect(req.request.method).toEqual('GET');
    req.flush(expectedData);
  });
});
