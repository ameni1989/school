import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarecoleComponent } from './sidebarecole.component';

describe('SidebarecoleComponent', () => {
  let component: SidebarecoleComponent;
  let fixture: ComponentFixture<SidebarecoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarecoleComponent]
    });
    fixture = TestBed.createComponent(SidebarecoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
