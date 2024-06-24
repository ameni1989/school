import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutarretComponent } from './ajoutarret.component';

describe('AjoutarretComponent', () => {
  let component: AjoutarretComponent;
  let fixture: ComponentFixture<AjoutarretComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutarretComponent]
    });
    fixture = TestBed.createComponent(AjoutarretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
