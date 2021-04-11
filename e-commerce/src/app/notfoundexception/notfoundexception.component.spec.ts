import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfoundexceptionComponent } from './notfoundexception.component';

describe('NotfoundexceptionComponent', () => {
  let component: NotfoundexceptionComponent;
  let fixture: ComponentFixture<NotfoundexceptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotfoundexceptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotfoundexceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
