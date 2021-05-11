import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminisMenuComponent } from './adminis-menu.component';

describe('AdminisMenuComponent', () => {
  let component: AdminisMenuComponent;
  let fixture: ComponentFixture<AdminisMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminisMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminisMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
