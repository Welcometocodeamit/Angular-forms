import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormMatComponent } from './reactive-form-mat.component';

describe('ReactiveFormMatComponent', () => {
  let component: ReactiveFormMatComponent;
  let fixture: ComponentFixture<ReactiveFormMatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveFormMatComponent]
    });
    fixture = TestBed.createComponent(ReactiveFormMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
