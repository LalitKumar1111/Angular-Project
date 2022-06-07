import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Planner1Component } from './planner1.component';

describe('Planner1Component', () => {
  let component: Planner1Component;
  let fixture: ComponentFixture<Planner1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Planner1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Planner1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
