import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveriesInProgressComponent } from './deliveries-in-progress.component';
import { HttpClientModule } from '@angular/common/http';

describe('DeliveriesInProgressComponent', () => {
  let component: DeliveriesInProgressComponent;
  let fixture: ComponentFixture<DeliveriesInProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveriesInProgressComponent, HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(DeliveriesInProgressComponent);
    component = fixture.componentInstance;
    component.resumeInProgress = [
      { nome: 'John Doe', totalEntregas: 10, entregasRealizadas: 5 },
      { nome: 'Jane Doe', totalEntregas: 8, entregasRealizadas: 8 },
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct number of rows', () => {
    const tableRows = fixture.nativeElement.querySelectorAll('tr');
    expect(tableRows.length).toEqual(component.resumeInProgress.length + 1);
  });

  it('should display the correct data in the table', () => {
    const firstRowData = fixture.nativeElement
      .querySelectorAll('tr')[1]
      .querySelectorAll('td');
    expect(firstRowData[0].textContent).toContain(
      component.resumeInProgress[0].nome,
    );
    expect(firstRowData[1].textContent).toContain(
      component.resumeInProgress[0].totalEntregas.toString(),
    );
    expect(firstRowData[2].textContent).toContain(
      component.resumeInProgress[0].entregasRealizadas.toString(),
    );
  });
});
