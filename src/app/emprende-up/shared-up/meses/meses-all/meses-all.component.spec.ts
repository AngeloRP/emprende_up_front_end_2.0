import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesesAllComponent } from './meses-all.component';

describe('MesesAllComponent', () => {
  let component: MesesAllComponent;
  let fixture: ComponentFixture<MesesAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesesAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesesAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
