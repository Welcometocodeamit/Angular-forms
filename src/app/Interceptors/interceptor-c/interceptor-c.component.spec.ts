import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterceptorCComponent } from './interceptor-c.component';

describe('InterceptorCComponent', () => {
  let component: InterceptorCComponent;
  let fixture: ComponentFixture<InterceptorCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterceptorCComponent]
    });
    fixture = TestBed.createComponent(InterceptorCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
