import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersTableInactiveComponent } from './users-table-inactive.component';

describe('UsersTableInactiveComponent', () => {
  let component: UsersTableInactiveComponent;
  let fixture: ComponentFixture<UsersTableInactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersTableInactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersTableInactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
