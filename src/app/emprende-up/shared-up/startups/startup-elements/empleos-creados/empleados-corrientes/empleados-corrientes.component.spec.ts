import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosCorrientesComponent } from './empleados-corrientes.component';

describe('EmpleadosCorrientesComponent', () => {
  let component: EmpleadosCorrientesComponent;
  let fixture: ComponentFixture<EmpleadosCorrientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadosCorrientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadosCorrientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
