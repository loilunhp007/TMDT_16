import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ACERASPIREComponent } from './aceraspire.component';

describe('ACERASPIREComponent', () => {
  let component: ACERASPIREComponent;
  let fixture: ComponentFixture<ACERASPIREComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ACERASPIREComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ACERASPIREComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
