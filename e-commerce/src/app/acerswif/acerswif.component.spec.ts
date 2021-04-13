import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ACERSWIFComponent } from './acerswif.component';

describe('ACERSWIFComponent', () => {
  let component: ACERSWIFComponent;
  let fixture: ComponentFixture<ACERSWIFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ACERSWIFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ACERSWIFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
