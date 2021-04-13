import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HPOMENComponent } from './hpomen.component';

describe('HPOMENComponent', () => {
  let component: HPOMENComponent;
  let fixture: ComponentFixture<HPOMENComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HPOMENComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HPOMENComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
