import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterentrepriseComponent } from './footerentreprise.component';

describe('FooterentrepriseComponent', () => {
  let component: FooterentrepriseComponent;
  let fixture: ComponentFixture<FooterentrepriseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterentrepriseComponent]
    });
    fixture = TestBed.createComponent(FooterentrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
