import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MSIGEComponent } from './msige.component';

describe('MSIGEComponent', () => {
  let component: MSIGEComponent;
  let fixture: ComponentFixture<MSIGEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MSIGEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MSIGEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
