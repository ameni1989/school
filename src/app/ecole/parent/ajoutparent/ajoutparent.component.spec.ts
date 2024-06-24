import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutparentComponent } from './ajoutparent.component';

describe('AjoutparentComponent', () => {
  let component: AjoutparentComponent;
  let fixture: ComponentFixture<AjoutparentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutparentComponent]
    });
    fixture = TestBed.createComponent(AjoutparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
