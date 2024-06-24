import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterecoleComponent } from './footerecole.component';

describe('FooterecoleComponent', () => {
  let component: FooterecoleComponent;
  let fixture: ComponentFixture<FooterecoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterecoleComponent]
    });
    fixture = TestBed.createComponent(FooterecoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
