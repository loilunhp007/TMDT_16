import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HPENVYComponent } from './hpenvy.component';

describe('HPENVYComponent', () => {
  let component: HPENVYComponent;
  let fixture: ComponentFixture<HPENVYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HPENVYComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HPENVYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
