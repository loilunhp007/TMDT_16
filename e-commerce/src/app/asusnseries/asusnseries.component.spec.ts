import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ASUSNSERIESComponent } from './asusnseries.component';

describe('ASUSNSERIESComponent', () => {
  let component: ASUSNSERIESComponent;
  let fixture: ComponentFixture<ASUSNSERIESComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ASUSNSERIESComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ASUSNSERIESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
