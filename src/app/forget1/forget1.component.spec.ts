import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Forget1Component } from './forget1.component';

describe('Forget1Component', () => {
  let component: Forget1Component;
  let fixture: ComponentFixture<Forget1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Forget1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Forget1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
