import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeversionComponent } from './listeversion.component';

describe('ListeversionComponent', () => {
  let component: ListeversionComponent;
  let fixture: ComponentFixture<ListeversionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeversionComponent]
    });
    fixture = TestBed.createComponent(ListeversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
