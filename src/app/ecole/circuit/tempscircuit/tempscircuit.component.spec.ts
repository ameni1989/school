import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempscircuitComponent } from './tempscircuit.component';

describe('TempscircuitComponent', () => {
  let component: TempscircuitComponent;
  let fixture: ComponentFixture<TempscircuitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TempscircuitComponent]
    });
    fixture = TestBed.createComponent(TempscircuitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
