import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosFreelancersComponent } from './empleados-freelancers.component';

describe('EmpleadosFreelancersComponent', () => {
  let component: EmpleadosFreelancersComponent;
  let fixture: ComponentFixture<EmpleadosFreelancersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadosFreelancersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadosFreelancersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
