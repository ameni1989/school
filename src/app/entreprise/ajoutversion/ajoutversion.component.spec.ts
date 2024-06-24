import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutversionComponent } from './ajoutversion.component';

describe('AjoutversionComponent', () => {
  let component: AjoutversionComponent;
  let fixture: ComponentFixture<AjoutversionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutversionComponent]
    });
    fixture = TestBed.createComponent(AjoutversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
