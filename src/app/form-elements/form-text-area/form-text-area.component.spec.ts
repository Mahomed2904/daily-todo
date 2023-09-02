import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTextAreaComponent } from './form-text-area.component';

describe('FormTextAreaComponent', () => {
  let component: FormTextAreaComponent;
  let fixture: ComponentFixture<FormTextAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormTextAreaComponent]
    });
    fixture = TestBed.createComponent(FormTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
