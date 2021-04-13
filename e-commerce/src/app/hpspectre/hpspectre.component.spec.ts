import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HPSPECTREComponent } from './hpspectre.component';

describe('HPSPECTREComponent', () => {
  let component: HPSPECTREComponent;
  let fixture: ComponentFixture<HPSPECTREComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HPSPECTREComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HPSPECTREComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
