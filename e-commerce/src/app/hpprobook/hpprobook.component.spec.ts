import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HPPROBOOKComponent } from './hpprobook.component';

describe('HPPROBOOKComponent', () => {
  let component: HPPROBOOKComponent;
  let fixture: ComponentFixture<HPPROBOOKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HPPROBOOKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HPPROBOOKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
