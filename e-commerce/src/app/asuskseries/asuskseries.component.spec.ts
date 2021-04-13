import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ASUSKSERIESComponent } from './asuskseries.component';

describe('ASUSKSERIESComponent', () => {
  let component: ASUSKSERIESComponent;
  let fixture: ComponentFixture<ASUSKSERIESComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ASUSKSERIESComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ASUSKSERIESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
