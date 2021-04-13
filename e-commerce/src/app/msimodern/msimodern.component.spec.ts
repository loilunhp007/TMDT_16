import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MSIMODERNComponent } from './msimodern.component';

describe('MSIMODERNComponent', () => {
  let component: MSIMODERNComponent;
  let fixture: ComponentFixture<MSIMODERNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MSIMODERNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MSIMODERNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
