import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HPZBOOKComponent } from './hpzbook.component';

describe('HPZBOOKComponent', () => {
  let component: HPZBOOKComponent;
  let fixture: ComponentFixture<HPZBOOKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HPZBOOKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HPZBOOKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
