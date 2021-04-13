import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MSIGLComponent } from './msigl.component';

describe('MSIGLComponent', () => {
  let component: MSIGLComponent;
  let fixture: ComponentFixture<MSIGLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MSIGLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MSIGLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
