import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsuccessfulDeliveriesComponent } from './unsuccessful-deliveries.component';

describe('UnsuccessfulDeliveriesComponent', () => {
  let component: UnsuccessfulDeliveriesComponent;
  let fixture: ComponentFixture<UnsuccessfulDeliveriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnsuccessfulDeliveriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnsuccessfulDeliveriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
