import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Forget3Component } from './forget3.component';

describe('Forget3Component', () => {
  let component: Forget3Component;
  let fixture: ComponentFixture<Forget3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Forget3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Forget3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
