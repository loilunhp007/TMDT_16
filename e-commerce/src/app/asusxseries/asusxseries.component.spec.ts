import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ASUSXSERIESComponent } from './asusxseries.component';

describe('ASUSXSERIESComponent', () => {
  let component: ASUSXSERIESComponent;
  let fixture: ComponentFixture<ASUSXSERIESComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ASUSXSERIESComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ASUSXSERIESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
