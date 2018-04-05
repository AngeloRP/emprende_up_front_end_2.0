import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosFundadoresComponent } from './empleados-fundadores.component';

describe('EmpleadosFundadoresComponent', () => {
  let component: EmpleadosFundadoresComponent;
  let fixture: ComponentFixture<EmpleadosFundadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadosFundadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadosFundadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
