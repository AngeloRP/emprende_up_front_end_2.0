import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMillarComponent } from './input-millar.component';

describe('InputMillarComponent', () => {
  let component: InputMillarComponent;
  let fixture: ComponentFixture<InputMillarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputMillarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputMillarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
