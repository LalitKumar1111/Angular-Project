import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Forget2Component } from './forget2.component';

describe('Forget2Component', () => {
  let component: Forget2Component;
  let fixture: ComponentFixture<Forget2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Forget2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Forget2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
