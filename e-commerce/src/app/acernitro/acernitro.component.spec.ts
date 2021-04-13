import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ACERNITROComponent } from './acernitro.component';

describe('ACERNITROComponent', () => {
  let component: ACERNITROComponent;
  let fixture: ComponentFixture<ACERNITROComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ACERNITROComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ACERNITROComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
