import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonEliminarComponent } from './button-eliminar.component';

describe('ButtonEliminarComponent', () => {
  let component: ButtonEliminarComponent;
  let fixture: ComponentFixture<ButtonEliminarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonEliminarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
