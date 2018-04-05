import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RendimientoEconomicoInicialComponent } from './rendimiento-economico-inicial.component';

describe('RendimientoEconomicoInicialComponent', () => {
  let component: RendimientoEconomicoInicialComponent;
  let fixture: ComponentFixture<RendimientoEconomicoInicialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RendimientoEconomicoInicialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RendimientoEconomicoInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
