import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashagentComponent } from './dashagent.component';

describe('DashagentComponent', () => {
  let component: DashagentComponent;
  let fixture: ComponentFixture<DashagentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashagentComponent]
    });
    fixture = TestBed.createComponent(DashagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
