import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DELLVOSTROComponent } from './dellvostro.component';

describe('DELLVOSTROComponent', () => {
  let component: DELLVOSTROComponent;
  let fixture: ComponentFixture<DELLVOSTROComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DELLVOSTROComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DELLVOSTROComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
