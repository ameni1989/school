import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutcircuitComponent } from './ajoutcircuit.component';

describe('AjoutcircuitComponent', () => {
  let component: AjoutcircuitComponent;
  let fixture: ComponentFixture<AjoutcircuitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutcircuitComponent]
    });
    fixture = TestBed.createComponent(AjoutcircuitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
