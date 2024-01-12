import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrServiceComponent } from './err-service.component';

describe('ErrServiceComponent', () => {
  let component: ErrServiceComponent;
  let fixture: ComponentFixture<ErrServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrServiceComponent]
    });
    fixture = TestBed.createComponent(ErrServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
