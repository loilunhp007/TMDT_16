import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MSIBRAVOComponent } from './msibravo.component';

describe('MSIBRAVOComponent', () => {
  let component: MSIBRAVOComponent;
  let fixture: ComponentFixture<MSIBRAVOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MSIBRAVOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MSIBRAVOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
