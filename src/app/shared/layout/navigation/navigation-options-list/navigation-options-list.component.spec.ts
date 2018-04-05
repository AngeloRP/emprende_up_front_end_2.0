import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationOptionsListComponent } from './navigation-options-list.component';

describe('NavigationOptionsListComponent', () => {
  let component: NavigationOptionsListComponent;
  let fixture: ComponentFixture<NavigationOptionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationOptionsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationOptionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
