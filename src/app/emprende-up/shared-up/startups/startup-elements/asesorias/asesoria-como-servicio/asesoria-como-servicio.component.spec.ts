import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesoriaComoServicioComponent } from './asesoria-como-servicio.component';

describe('AsesoriaComoServicioComponent', () => {
  let component: AsesoriaComoServicioComponent;
  let fixture: ComponentFixture<AsesoriaComoServicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsesoriaComoServicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsesoriaComoServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
