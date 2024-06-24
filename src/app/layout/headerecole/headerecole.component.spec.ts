import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderecoleComponent } from './headerecole.component';

describe('HeaderecoleComponent', () => {
  let component: HeaderecoleComponent;
  let fixture: ComponentFixture<HeaderecoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderecoleComponent]
    });
    fixture = TestBed.createComponent(HeaderecoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
