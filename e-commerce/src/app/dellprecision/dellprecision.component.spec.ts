import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DELLPRECISIONComponent } from './dellprecision.component';

describe('DELLPRECISIONComponent', () => {
  let component: DELLPRECISIONComponent;
  let fixture: ComponentFixture<DELLPRECISIONComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DELLPRECISIONComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DELLPRECISIONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
