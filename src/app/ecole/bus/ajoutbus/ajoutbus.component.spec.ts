import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutbusComponent } from './ajoutbus.component';

describe('AjoutbusComponent', () => {
  let component: AjoutbusComponent;
  let fixture: ComponentFixture<AjoutbusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutbusComponent]
    });
    fixture = TestBed.createComponent(AjoutbusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
