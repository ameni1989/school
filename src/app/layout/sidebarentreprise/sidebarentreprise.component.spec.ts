import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarentrepriseComponent } from './sidebarentreprise.component';

describe('SidebarentrepriseComponent', () => {
  let component: SidebarentrepriseComponent;
  let fixture: ComponentFixture<SidebarentrepriseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarentrepriseComponent]
    });
    fixture = TestBed.createComponent(SidebarentrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
