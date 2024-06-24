import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderentrepriseComponent } from './headerentreprise.component';

describe('HeaderentrepriseComponent', () => {
  let component: HeaderentrepriseComponent;
  let fixture: ComponentFixture<HeaderentrepriseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderentrepriseComponent]
    });
    fixture = TestBed.createComponent(HeaderentrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
