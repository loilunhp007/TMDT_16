import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DELLXPSComponent } from './dellxps.component';

describe('DELLXPSComponent', () => {
  let component: DELLXPSComponent;
  let fixture: ComponentFixture<DELLXPSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DELLXPSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DELLXPSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
