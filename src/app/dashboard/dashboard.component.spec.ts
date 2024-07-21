import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard.component';
import { DeliveriesService } from '../shared/services/deliveries.service';
import { of } from 'rxjs';
import deliveriesMock from '../shared/mocks/entregas.mock.json';
import { HttpClientModule } from '@angular/common/http';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let mockDeliveriesService: jasmine.SpyObj<DeliveriesService>;

  beforeEach(waitForAsync(() => {
    mockDeliveriesService = jasmine.createSpyObj('DeliveriesService', [
      'loadDeliveries',
    ]);

    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, HttpClientModule, DashboardComponent],
      providers: [
        {
          provide: DeliveriesService,
          useValue: mockDeliveriesService,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    mockDeliveriesService.loadDeliveries.and.returnValue(
      of(deliveriesMock as never[]),
    );
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call loadDeliveries on init', () => {
    expect(mockDeliveriesService.loadDeliveries).toHaveBeenCalled();
  });
});
