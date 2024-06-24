import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutagentComponent } from './ajoutagent.component';

describe('AjoutagentComponent', () => {
  let component: AjoutagentComponent;
  let fixture: ComponentFixture<AjoutagentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutagentComponent]
    });
    fixture = TestBed.createComponent(AjoutagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
