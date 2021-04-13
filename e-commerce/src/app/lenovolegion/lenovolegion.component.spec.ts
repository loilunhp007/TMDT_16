import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LENOVOLEGIONComponent } from './lenovolegion.component';

describe('LENOVOLEGIONComponent', () => {
  let component: LENOVOLEGIONComponent;
  let fixture: ComponentFixture<LENOVOLEGIONComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LENOVOLEGIONComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LENOVOLEGIONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
