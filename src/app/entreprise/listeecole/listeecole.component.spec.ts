import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeecoleComponent } from './listeecole.component';

describe('ListeecoleComponent', () => {
  let component: ListeecoleComponent;
  let fixture: ComponentFixture<ListeecoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeecoleComponent]
    });
    fixture = TestBed.createComponent(ListeecoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
