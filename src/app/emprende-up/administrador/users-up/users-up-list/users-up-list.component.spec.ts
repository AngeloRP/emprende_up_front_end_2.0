import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersUpListComponent } from './users-up-list.component';

describe('UsersUpListComponent', () => {
  let component: UsersUpListComponent;
  let fixture: ComponentFixture<UsersUpListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersUpListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersUpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
