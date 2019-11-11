import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingTcktPageComponent } from './booking-tckt-page.component';

describe('BookingTcktPageComponent', () => {
  let component: BookingTcktPageComponent;
  let fixture: ComponentFixture<BookingTcktPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingTcktPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingTcktPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
