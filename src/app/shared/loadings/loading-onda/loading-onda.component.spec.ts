import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingOndaComponent } from './loading-onda.component';

describe('LoadingOndaComponent', () => {
  let component: LoadingOndaComponent;
  let fixture: ComponentFixture<LoadingOndaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingOndaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingOndaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
