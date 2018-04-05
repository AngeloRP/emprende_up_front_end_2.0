import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesesActivosComponent } from './meses-activos.component';

describe('MesesActivosComponent', () => {
  let component: MesesActivosComponent;
  let fixture: ComponentFixture<MesesActivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesesActivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesesActivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
