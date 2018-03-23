import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputResetComponent } from './input-reset.component';

describe('InputResetComponent', () => {
  let component: InputResetComponent;
  let fixture: ComponentFixture<InputResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputResetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
