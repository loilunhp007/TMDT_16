import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MSIPRESTIGEComponent } from './msiprestige.component';

describe('MSIPRESTIGEComponent', () => {
  let component: MSIPRESTIGEComponent;
  let fixture: ComponentFixture<MSIPRESTIGEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MSIPRESTIGEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MSIPRESTIGEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
