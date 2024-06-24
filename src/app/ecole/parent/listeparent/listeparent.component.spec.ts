import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeparentComponent } from './listeparent.component';

describe('ListeparentComponent', () => {
  let component: ListeparentComponent;
  let fixture: ComponentFixture<ListeparentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeparentComponent]
    });
    fixture = TestBed.createComponent(ListeparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
