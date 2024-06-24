import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListbusComponent } from './listbus.component';

describe('ListbusComponent', () => {
  let component: ListbusComponent;
  let fixture: ComponentFixture<ListbusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListbusComponent]
    });
    fixture = TestBed.createComponent(ListbusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
