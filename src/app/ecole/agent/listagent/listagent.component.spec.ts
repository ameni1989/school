import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagentComponent } from './listagent.component';

describe('ListagentComponent', () => {
  let component: ListagentComponent;
  let fixture: ComponentFixture<ListagentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListagentComponent]
    });
    fixture = TestBed.createComponent(ListagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
