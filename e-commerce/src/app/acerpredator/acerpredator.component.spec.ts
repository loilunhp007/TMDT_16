import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ACERPREDATORComponent } from './acerpredator.component';

describe('ACERPREDATORComponent', () => {
  let component: ACERPREDATORComponent;
  let fixture: ComponentFixture<ACERPREDATORComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ACERPREDATORComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ACERPREDATORComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
