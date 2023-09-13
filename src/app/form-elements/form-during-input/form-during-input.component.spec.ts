import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDuringInputComponent } from './form-during-input.component';

describe('FormDuringInputComponent', () => {
  let component: FormDuringInputComponent;
  let fixture: ComponentFixture<FormDuringInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormDuringInputComponent]
    });
    fixture = TestBed.createComponent(FormDuringInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
