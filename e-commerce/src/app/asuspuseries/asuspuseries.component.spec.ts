import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ASUSPUSERIESComponent } from './asuspuseries.component';

describe('ASUSPUSERIESComponent', () => {
  let component: ASUSPUSERIESComponent;
  let fixture: ComponentFixture<ASUSPUSERIESComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ASUSPUSERIESComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ASUSPUSERIESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
