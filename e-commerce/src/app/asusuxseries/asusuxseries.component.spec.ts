import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ASUSUXSERIESComponent } from './asusuxseries.component';

describe('ASUSUXSERIESComponent', () => {
  let component: ASUSUXSERIESComponent;
  let fixture: ComponentFixture<ASUSUXSERIESComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ASUSUXSERIESComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ASUSUXSERIESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
