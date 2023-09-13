import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSheduleAreaComponent } from './form-shedule-area.component';

describe('FormSheduleAreaComponent', () => {
  let component: FormSheduleAreaComponent;
  let fixture: ComponentFixture<FormSheduleAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormSheduleAreaComponent]
    });
    fixture = TestBed.createComponent(FormSheduleAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
