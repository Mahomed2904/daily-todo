import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveryStatusComponent } from './recovery-status.component';

describe('RecoveryStatusComponent', () => {
  let component: RecoveryStatusComponent;
  let fixture: ComponentFixture<RecoveryStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecoveryStatusComponent]
    });
    fixture = TestBed.createComponent(RecoveryStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
