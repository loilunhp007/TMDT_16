import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HPPAVILIONComponent } from './hppavilion.component';

describe('HPPAVILIONComponent', () => {
  let component: HPPAVILIONComponent;
  let fixture: ComponentFixture<HPPAVILIONComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HPPAVILIONComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HPPAVILIONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
