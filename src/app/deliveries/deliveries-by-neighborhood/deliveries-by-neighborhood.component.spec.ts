import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveriesByNeighborhoodComponent } from './deliveries-by-neighborhood.component';

describe('DeliveriesByNeighborhoodComponent', () => {
  let component: DeliveriesByNeighborhoodComponent;
  let fixture: ComponentFixture<DeliveriesByNeighborhoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveriesByNeighborhoodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeliveriesByNeighborhoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
