import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdfMatComponent } from './tdf-mat.component';

describe('TdfMatComponent', () => {
  let component: TdfMatComponent;
  let fixture: ComponentFixture<TdfMatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TdfMatComponent]
    });
    fixture = TestBed.createComponent(TdfMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
