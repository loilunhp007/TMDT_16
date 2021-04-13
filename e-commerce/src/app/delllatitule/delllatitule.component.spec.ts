import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DELLLATITULEComponent } from './delllatitule.component';

describe('DELLLATITULEComponent', () => {
  let component: DELLLATITULEComponent;
  let fixture: ComponentFixture<DELLLATITULEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DELLLATITULEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DELLLATITULEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
