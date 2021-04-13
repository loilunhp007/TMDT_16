import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HPELITEBOOKComponent } from './hpelitebook.component';

describe('HPELITEBOOKComponent', () => {
  let component: HPELITEBOOKComponent;
  let fixture: ComponentFixture<HPELITEBOOKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HPELITEBOOKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HPELITEBOOKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
