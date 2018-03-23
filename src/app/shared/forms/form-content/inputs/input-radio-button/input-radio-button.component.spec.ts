import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputRadioButtonComponent } from './input-radio-button.component';

describe('InputRadioButtonComponent', () => {
  let component: InputRadioButtonComponent;
  let fixture: ComponentFixture<InputRadioButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputRadioButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
