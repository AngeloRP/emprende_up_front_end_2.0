import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RendimientoEconomicoComponent } from './rendimiento-economico.component';

describe('RendimientoEconomicoComponent', () => {
  let component: RendimientoEconomicoComponent;
  let fixture: ComponentFixture<RendimientoEconomicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RendimientoEconomicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RendimientoEconomicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
