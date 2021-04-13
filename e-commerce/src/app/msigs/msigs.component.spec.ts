import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MSIGSComponent } from './msigs.component';

describe('MSIGSComponent', () => {
  let component: MSIGSComponent;
  let fixture: ComponentFixture<MSIGSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MSIGSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MSIGSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
