import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LENOVOYOGAComponent } from './lenovoyoga.component';

describe('LENOVOYOGAComponent', () => {
  let component: LENOVOYOGAComponent;
  let fixture: ComponentFixture<LENOVOYOGAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LENOVOYOGAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LENOVOYOGAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
