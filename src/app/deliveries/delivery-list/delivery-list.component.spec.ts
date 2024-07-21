import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryListComponent } from './delivery-list.component';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

describe('DeliveryListComponent', () => {
  let component: DeliveryListComponent;
  let fixture: ComponentFixture<DeliveryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveryListComponent, HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(DeliveryListComponent);
    component = fixture.componentInstance;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component.deliveries$ = of<any[]>([
      {
        id: '1',
        documento: '123456',
        motorista: { nome: 'John Doe' },
        cliente_origem: { bairro: 'Centro' },
        cliente_destino: { bairro: 'Sul' },
        status_entrega: 'Entregue',
      },
    ]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a table with the correct data', () => {
    fixture.detectChanges();
    const tableRows = fixture.nativeElement.querySelectorAll('tr');
    expect(tableRows.length).toBeGreaterThan(1);
    expect(tableRows[1].cells[2].textContent).toContain('John Doe');
    expect(tableRows[1].cells[5].textContent).toContain('Entregue');
  });
});
