import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LENOVOTHINKPADComponent } from './lenovothinkpad.component';

describe('LENOVOTHINKPADComponent', () => {
  let component: LENOVOTHINKPADComponent;
  let fixture: ComponentFixture<LENOVOTHINKPADComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LENOVOTHINKPADComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LENOVOTHINKPADComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
