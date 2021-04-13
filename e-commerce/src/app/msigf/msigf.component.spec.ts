import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MSIGFComponent } from './msigf.component';

describe('MSIGFComponent', () => {
  let component: MSIGFComponent;
  let fixture: ComponentFixture<MSIGFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MSIGFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MSIGFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
