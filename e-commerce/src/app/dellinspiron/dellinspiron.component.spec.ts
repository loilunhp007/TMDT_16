import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DELLINSPIRONComponent } from './dellinspiron.component';

describe('DELLINSPIRONComponent', () => {
  let component: DELLINSPIRONComponent;
  let fixture: ComponentFixture<DELLINSPIRONComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DELLINSPIRONComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DELLINSPIRONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
