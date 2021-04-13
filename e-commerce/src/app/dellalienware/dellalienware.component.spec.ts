import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DELLALIENWAREComponent } from './dellalienware.component';

describe('DELLALIENWAREComponent', () => {
  let component: DELLALIENWAREComponent;
  let fixture: ComponentFixture<DELLALIENWAREComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DELLALIENWAREComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DELLALIENWAREComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
