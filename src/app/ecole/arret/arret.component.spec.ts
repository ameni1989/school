import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArretComponent } from './arret.component';

describe('ArretComponent', () => {
  let component: ArretComponent;
  let fixture: ComponentFixture<ArretComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArretComponent]
    });
    fixture = TestBed.createComponent(ArretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
