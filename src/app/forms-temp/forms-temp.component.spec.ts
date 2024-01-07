import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsTempComponent } from './forms-temp.component';

describe('FormsTempComponent', () => {
  let component: FormsTempComponent;
  let fixture: ComponentFixture<FormsTempComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsTempComponent]
    });
    fixture = TestBed.createComponent(FormsTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
