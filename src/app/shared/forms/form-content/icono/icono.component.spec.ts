import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconoComponent } from './icono.component';

describe('IconoComponent', () => {
  let component: IconoComponent;
  let fixture: ComponentFixture<IconoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
