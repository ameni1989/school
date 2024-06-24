import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutertempscircuitComponent } from './ajoutertempscircuit.component';

describe('AjoutertempscircuitComponent', () => {
  let component: AjoutertempscircuitComponent;
  let fixture: ComponentFixture<AjoutertempscircuitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutertempscircuitComponent]
    });
    fixture = TestBed.createComponent(AjoutertempscircuitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
