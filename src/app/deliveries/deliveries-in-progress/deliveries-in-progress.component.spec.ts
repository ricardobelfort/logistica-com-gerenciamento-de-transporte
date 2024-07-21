import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveriesInProgressComponent } from './deliveries-in-progress.component';

describe('DeliveriesInProgressComponent', () => {
  let component: DeliveriesInProgressComponent;
  let fixture: ComponentFixture<DeliveriesInProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveriesInProgressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeliveriesInProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
