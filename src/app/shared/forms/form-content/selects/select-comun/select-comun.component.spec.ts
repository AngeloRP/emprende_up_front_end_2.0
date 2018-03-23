import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectComunComponent } from './select-comun.component';

describe('SelectComunComponent', () => {
  let component: SelectComunComponent;
  let fixture: ComponentFixture<SelectComunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectComunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectComunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
