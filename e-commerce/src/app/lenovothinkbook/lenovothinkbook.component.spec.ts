import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LENOVOTHINKBOOKComponent } from './lenovothinkbook.component';

describe('LENOVOTHINKBOOKComponent', () => {
  let component: LENOVOTHINKBOOKComponent;
  let fixture: ComponentFixture<LENOVOTHINKBOOKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LENOVOTHINKBOOKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LENOVOTHINKBOOKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
