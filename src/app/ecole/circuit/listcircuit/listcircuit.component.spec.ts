import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcircuitComponent } from './listcircuit.component';

describe('ListcircuitComponent', () => {
  let component: ListcircuitComponent;
  let fixture: ComponentFixture<ListcircuitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListcircuitComponent]
    });
    fixture = TestBed.createComponent(ListcircuitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
