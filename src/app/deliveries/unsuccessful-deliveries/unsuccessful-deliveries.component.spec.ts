import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsuccessfulDeliveriesComponent } from './unsuccessful-deliveries.component';
import { HttpClientModule } from '@angular/common/http';

describe('UnsuccessfulDeliveriesComponent', () => {
  let component: UnsuccessfulDeliveriesComponent;
  let fixture: ComponentFixture<UnsuccessfulDeliveriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnsuccessfulDeliveriesComponent, HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(UnsuccessfulDeliveriesComponent);
    component = fixture.componentInstance;
    component.resumeFailed = [
      { nome: 'John Doe', entregasComInsucesso: 3 },
      { nome: 'Jane Doe', entregasComInsucesso: 2 },
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a table with the correct data', () => {
    const tableRows = fixture.nativeElement.querySelectorAll('tr');
    expect(tableRows.length).toBe(3);
    expect(tableRows[1].cells[0].textContent).toContain('John Doe');
    expect(tableRows[1].cells[1].textContent).toContain('3');
    expect(tableRows[2].cells[0].textContent).toContain('Jane Doe');
    expect(tableRows[2].cells[1].textContent).toContain('2');
  });
});
