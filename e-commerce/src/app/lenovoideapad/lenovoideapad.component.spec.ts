import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LENOVOIDEAPADComponent } from './lenovoideapad.component';

describe('LENOVOIDEAPADComponent', () => {
  let component: LENOVOIDEAPADComponent;
  let fixture: ComponentFixture<LENOVOIDEAPADComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LENOVOIDEAPADComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LENOVOIDEAPADComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
