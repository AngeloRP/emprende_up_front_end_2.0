import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAceptarComponent } from './button-aceptar.component';

describe('ButtonAceptarComponent', () => {
  let component: ButtonAceptarComponent;
  let fixture: ComponentFixture<ButtonAceptarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonAceptarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonAceptarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
