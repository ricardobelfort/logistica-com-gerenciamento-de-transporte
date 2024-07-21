import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from '../../../dashboard/dashboard.component';
import { DeliveryListComponent } from '../../../deliveries/delivery-list/delivery-list.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HeaderComponent,
        RouterModule.forRoot([
          { path: '', component: DashboardComponent },
          { path: 'deliveries', component: DeliveryListComponent },
        ]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct routerLinks on nav links', () => {
    const links = fixture.debugElement.queryAll(By.css('nav a'));
    expect(links.length).toBe(2);
    expect(links[0].nativeElement.getAttribute('routerLink')).toBe('/');
    expect(links[1].nativeElement.getAttribute('routerLink')).toBe(
      '/deliveries',
    );
  });
});
