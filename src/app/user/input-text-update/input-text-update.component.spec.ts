import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextUpdateComponent } from './input-text-update.component';

describe('InputTextUpdateComponent', () => {
  let component: InputTextUpdateComponent;
  let fixture: ComponentFixture<InputTextUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputTextUpdateComponent]
    });
    fixture = TestBed.createComponent(InputTextUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
