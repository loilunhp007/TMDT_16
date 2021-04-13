import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ASUSGSERIESComponent } from './asusgseries.component';

describe('ASUSGSERIESComponent', () => {
  let component: ASUSGSERIESComponent;
  let fixture: ComponentFixture<ASUSGSERIESComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ASUSGSERIESComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ASUSGSERIESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
