import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwdsuccessComponent } from './pwdsuccess.component';

describe('PwdsuccessComponent', () => {
  let component: PwdsuccessComponent;
  let fixture: ComponentFixture<PwdsuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PwdsuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PwdsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
