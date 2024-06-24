import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarretComponent } from './listarret.component';

describe('ListarretComponent', () => {
  let component: ListarretComponent;
  let fixture: ComponentFixture<ListarretComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarretComponent]
    });
    fixture = TestBed.createComponent(ListarretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
