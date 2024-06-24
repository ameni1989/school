import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutecoleComponent } from './ajoutecole.component';

describe('AjoutecoleComponent', () => {
  let component: AjoutecoleComponent;
  let fixture: ComponentFixture<AjoutecoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutecoleComponent]
    });
    fixture = TestBed.createComponent(AjoutecoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
